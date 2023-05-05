import React, {useEffect} from 'react';
import { BsSlice, BsSliceState } from '../../reduxs/bsCreateSlick';
import Table, { TableEXColumnType, Sorter } from './Table';
import { useSelector, useDispatch } from 'react-redux';
import { FilterColumnType } from './HighLevelSearch';

type Props = {
    slice: BsSlice,
    // antd Table columns
    columns: Array<TableEXColumnType>,
    filterColumns: Array<FilterColumnType>,
    // antd Table scroll
    scroll?: { x?: number, y?: number }
    // ant rowKey
    rowKey?: string,
    // 行选择
    rowSelection?: {
        // 选择行时回调
        onSelectChange: (selectedRowKeys: Array<any>, selectedRows: Array<any>) => void,
        // 选择行的key
        selectedRowKeys: Array<any>,
        // 选择的行
        selectedRows: Array<any>,
    },
    // 工具条
    bottomTools?: React.ReactNode,
};

const CommonPage = (props: Props) => {
    const state: BsSliceState = useSelector((state: any) => state[props.slice.name]);
    const dispatch = useDispatch();

    const onChange = (page?: number, pageSize?: number, filter?: any, sorter?: Sorter) => {
        let cursorter = sorter || state.sorter;
        if (!cursorter) {
            let defaultSortCol = props.columns.find(e => e.defaultSortOrder);
            if (defaultSortCol) {
                cursorter = {
                    columnKey: defaultSortCol.key,
                    field: defaultSortCol.dataIndex,
                    order: defaultSortCol.defaultSortOrder!
                }
            }
        }
        dispatch(props.slice.asyncActions.fetchPageDatass({
            page: page || state.page,
            pageSize: pageSize || state.pageSize,
            filter: filter || state.filter,
            sortField: sorter?.field as any,
            sortDirection: sorter?.order == 'ascend' ? 'asc' : sorter?.order == 'descend' ? 'desc' : undefined
        }) as any);
    }

    useEffect(() => {
        // 在页面结束渲染时进行一次API请求
        onChange();        
    }, []);

    return <Table
        page={state.page}
        pageSize={state.pageSize}
        total={state.total}
        datas={state.datas}
        onChange={onChange}
        {...props}
    />
}

export default CommonPage;