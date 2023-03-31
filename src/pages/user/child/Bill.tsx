import { ColumnDataType, TableData } from '@/types/global'
import { Button, Space, Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'


const TableCol: ColumnsType<ColumnDataType> = [
    {
        title: "No",
        dataIndex: "no",
        key: "no"
    },
    {
        title: "Date",
        dataIndex: "date",
        key: "date"
    },

    {
        title: "Amount",
        dataIndex: "amount",
        key: "amount"
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (_, { status }) => (
            <Tag color={status === 'paid' ? 'green' : "warning"}>
                {status.toUpperCase()}
            </Tag>
        )
    },
    {
        title: 'Plans',
        dataIndex: 'plan',
        key: 'plan'
    },
    {
        title: "Details",
        key: "datails",
        dataIndex: "datails",
        render: (_, { datails }) => (
            <>
                {datails.map((tag, i) => {
                    let color = tag.title !== "Paid" ? "geekblue" : "green";

                    return (
                        <Tag color={color} key={i} onClick={() => console.log(tag)}>
                            {tag.title.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        )
    },
    {
        title: "Action",
        key: "action",
        align: 'center',
        render: (_, { status }) => (
            <Button type={status === 'paid' ? 'dashed' : 'primary'}> {status === 'paid' ? 'Preview' : 'Pay'}</Button >
        )
    }
];

const Bill = () => {


    return (
        <div className='recharge-screen'>
            <div className="rechargeHead">
                <h2>Billing Details</h2>
            </div>
            <Table columns={TableCol} dataSource={TableData} style={{ overflow: 'scroll' }} />
        </div>
    )
}

export default Bill