import { createSlice, CreateSliceOptions, PayloadAction, Slice, createAsyncThunk } from '@reduxjs/toolkit';
import BaseApi, { Entity } from '../apis/BaseApi';

const create = (name: string, api: BaseApi<any>) => {
    // First, create the thunk
    const fetchPageDatas = createAsyncThunk(
        `${name}/fetchPageDatas`,
        async (params: {
            page: number,
            pageSize: number,
            filter?: any,
            sortField?: string,
            sortDirection?: 'asc' | 'desc'
        }, thunkAPI) => {
            let list = await api.getList(params.page, params.pageSize, params.filter, params.sortField, params.sortDirection);
            return {
                page: params.page,
                pageSize: params.pageSize,
                total: list['hydra:totalItems'],
                filter: params.filter,
                datas: list['hydra:member'],
                sortField: params.sortField,
                sortDirection: params.sortDirection,
            };
        }
    )

    const refreshPageDatas = createAsyncThunk(
        `${name}/refreshPageDatas`,
        async (params: {
        }, thunkAPI) => {
            const state = (thunkAPI.getState() as BsSliceState)[name];
            let list = await api.getList(state.page, state.pageSize, state.filter, state.sortField, state.sortDirection);
            return {
                total: list['hydra:totalItems'],
                datas: list['hydra:member']
            };
        }
    );

    return {
        ...createSlice({
            name: name,
            initialState: {
                page: -1,
                pageSize: 30,
                filter: {} as any,
                sortField: undefined,
                sortDirection: 'desc',
                total: 0,
                datas: []
            } as BsSliceState,
            reducers: {
            },
            extraReducers: (builder) => {
                // Add reducers for additional action types here, and handle loading state as needed
                builder.addCase(fetchPageDatas.fulfilled, (state, action) => {
                    state.page = action.payload.page;
                    state.pageSize = action.payload.pageSize;
                    state.total = action.payload.total;
                    state.filter = action.payload.filter;
                    state.datas = action.payload.datas;
                    state.sortField = action.payload.sortField;
                    state.sortDirection = action.payload.sortDirection;
                });

                builder.addCase(refreshPageDatas.fulfilled, (state, action) => {
                    state.total = action.payload.total;
                    state.datas = action.payload.datas;
                });
            },
        }),
        asyncActions: {
            fetchPageDatas: fetchPageDatas,
            refreshPageDatas: refreshPageDatas
        }
    }
}

export type BsSliceState = {
    page: number,
    pageSize: number,
    filter: any,
    sortField?: string,
    sortDirection?: 'asc' | 'desc'
    total: number,
    datas: Array<any>
}
export type BsSlice = ReturnType<typeof create>;

export default create;