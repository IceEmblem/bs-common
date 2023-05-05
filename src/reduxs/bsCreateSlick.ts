import { createSlice, CreateSliceOptions, PayloadAction, Slice, createAsyncThunk } from '@reduxjs/toolkit';
import BaseApi, { Entity } from '../apis/BaseApi';

const create = (name: string, api: BaseApi<any>) => {
    // First, create the thunk
    const fetchPageDatass = createAsyncThunk(
        `${name}/fetchPageDatass`,
        async (params: {
            page: number,
            pageSize: number,
            filter?: any,
            sortField?: any,
            sortDirection?: 'asc' | 'desc'
        }, thunkAPI) => {
            let list = await api.getList(params.page, params.pageSize, params.filter, params.sortField, params.sortDirection);
            return {
                page: params.page,
                pageSize: params.pageSize,
                total: list['hydra:totalItems'],
                filter: params.filter,
                datas: list['hydra:member'],
            };
        }
    )

    return {
        ...createSlice({
            name: name,
            initialState: {
                page: 1,
                pageSize: 30,
                filter: {} as any,
                sorter: null as any,
                total: 0,
                datas: []
            } as BsSliceState,
            reducers: {
            },
            extraReducers: (builder) => {
                // Add reducers for additional action types here, and handle loading state as needed
                builder.addCase(fetchPageDatass.fulfilled, (state, action) => {
                    state.page = action.payload.page;
                    state.pageSize = action.payload.pageSize;
                    state.total = action.payload.total;
                    state.filter = action.payload.filter;
                    state.datas = action.payload.datas;
                })
            },
        }),
        asyncActions: {
            fetchPageDatass: fetchPageDatass
        }
    }
}

export type BsSliceState = {
    page: number,
    pageSize: number,
    filter: any,
    sorter: any,
    total: number,
    datas: Array<any>
}
export type BsSlice = ReturnType<typeof create>;

export default create;