import React, { useEffect, useState } from 'react';
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
    // 分类设置
    classConfig?: {
        // 分类
        classes: Array<{ label: React.ReactNode, value: string }>,
        // api 查询时使用的名称
        queryName: string,
    },
    // 工具栏
    tools?: React.ReactNode,
    // 导出动作
    exportAction?: (rows: Array<any>, filter?: any) => void,
};

const CommonPage = (props: Props) => {
    const state: BsSliceState = useSelector((state: any) => state[props.slice.name]);
    const dispatch = useDispatch();
    const [init, setInit] = useState(false);

    const onChange = (page?: number, pageSize?: number, filter?: any, sorter?: Sorter) => {
        let sortField = sorter?.field || state.sortField;
        let sortDirection = (sorter?.order == 'ascend' ? 'asc' : sorter?.order == 'descend' ? 'desc' : undefined) || state.sortDirection;
        return dispatch(props.slice.asyncActions.fetchPageDatas({
            page: page || state.page,
            pageSize: pageSize || state.pageSize,
            filter: filter || state.filter,
            sortField: sortField,
            sortDirection: sortDirection
        }) as any);
    }

    useEffect(() => {
        // 如果页面未渲染过，则使用默认参数
        if (state.page < 0) {
            let sortField;
            let sortDirection;
            let defaultSortCol = props.columns.find(e => e.defaultSortOrder);
            if (defaultSortCol) {
                sortField = defaultSortCol.dataIndex as string;
                sortDirection = defaultSortCol.defaultSortOrder == 'ascend' ? 'asc' : 'desc'
            }
            dispatch(props.slice.asyncActions.fetchPageDatas({
                page: 1,
                pageSize: 30,
                filter: undefined,
                sortField: sortField,
                sortDirection: sortDirection
            }) as any);
            setInit(true);
            return;
        }
        setInit(true);
    }, []);

    if (init == false) {
        return <></>;
    }

    return <Table
        page={state.page}
        pageSize={state.pageSize}
        total={state.total}
        datas={state.datas}
        filter={state.filter}
        sorter={state.sortField ? {
            columnKey: state.sortField,
            field: state.sortField,
            order: state.sortDirection == 'asc' ? 'ascend' : 'descend'
        } : undefined}
        onChange={onChange}
        {...props}
    />
}

export default CommonPage;