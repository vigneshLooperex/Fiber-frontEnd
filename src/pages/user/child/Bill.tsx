import { useGetBillQuery } from '@/redux/service/userApi';
import { Button, Space, Table, Tag } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'


interface tagObject {
  title: string;
  id: string;
}

 interface ColumnDataType {
  key: string;
  no: number;
  date: string; 
  amount: number;
  status: string;
  plan: string;
  datails: tagObject[];
}

const TableData: ColumnDataType[] = [
    {
    key: "1",
    no: 32,
    date: "13/06/2002",
    amount: 800,
    status: 'pending',
    plan: 'Basic plan',
    datails: [
    //   { title: "payment", link: "#" },
      { title: "bill", id: "#" }
    ],
  },
  {
    key: "2",
    no: 32,
    date: "13/06/2002",
    amount: 800,
    status: 'payment',
    plan: 'Premium plan',
    datails: [
      { title: "payment", id: "#" },
      { title: "bill", id: "#" }
    ],
  },
  {
    key: "3",
    no: 42,
    date: "13/06/2002",
    amount: 800,
    status: 'payment',
    plan: 'Entertaiment plan',
    datails: [
      { title: "payment", id: "#" },
      { title: "bill", id: "#" }
    ],
  },
  
];

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
                    let color = tag.title !== "payment" ? "geekblue" : "green";

                    return tag.id !== "0" && <Tag color={color} key={i} onClick={() => console.log(tag)}>
                    {tag.title.toUpperCase()}
                </Tag>
                        
                    
                })}
            </>
        )
    },
    {
        title: "Action",
        key: "action",
        align: 'center',
        render: (_, { status }) => (
            <Button type={status === 'payment' ? 'dashed' : 'primary'}> {status === 'payment' ? 'Preview' : 'Pay'}</Button >
        )
    }
];

const Bill = () => {
  const [page, setPage] = useState(1)
  const [billData, setBillData] = useState<ColumnDataType[]>([])
  const {data} = useGetBillQuery(page)

  

  React.useEffect(() => {
      data?.bills.map((item:any, i:any) => {

        const {_id, createdAt,invoiceNo, amount, status, plan_id, payment_id} = item
        
        const datails = [
          { title: "payment", id: payment_id?._id ? payment_id?._id : "0" },
          { title: "bill", id: _id }
        ]
        setBillData(prev => [...prev, {key: _id, no: invoiceNo, date: createdAt, amount, status, plan: plan_id.name, datails}])
      })

  }, [data])

    return (
        <div className='recharge-screen'>
            <div className="rechargeHead">
                <h2>Billing Details</h2>
            </div>
            <Table columns={TableCol} dataSource={billData} pagination={{
              onChange(page, pageSize) {
                // console.log(page, pageSize);
                setBillData([])
                setPage(page)
              },
              total: data?.totalCount,
            }} style={{ overflowX: 'scroll' }} />
        </div>
    )
}

export default Bill