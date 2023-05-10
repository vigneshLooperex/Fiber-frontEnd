import { useCollectMutation, useCollectRequestQuery } from '@/redux/service/userApi'
import { RootState } from '@/redux/store'
import { Button, DatePicker, Form, Input, InputNumber, Radio, Table, TimePicker, message, Space, Tag } from 'antd'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { ColumnsType } from 'antd/es/table';


interface DataType {
    key?: string;
    date?: string;
    fromTime?: string;
    toTime?: string;
    change?: string;
    address?: string;
    status?: string;
  }


const Collect = () => {
    const [page, setPage] = React.useState(1)
    
    const user = useSelector((state:RootState) => state.auth.user)
    const [form] = Form.useForm()
    
    const [collectTable, setCollectTable] = React.useState<DataType[]>([])
    
    const {data, isLoading: tableLoading} = useCollectRequestQuery(page)
    const [collect, {isLoading}] = useCollectMutation()


    useEffect(() => {
        if(user){
            const {name, mobileNo, address}:any = user
            form.setFieldsValue({name:name || '' , mobileNo: mobileNo || '', address: address || ''})
        }

        if(data?.collectionRequests){
            setCollectTable([])
            data?.collectionRequests.map((item:any) => {
                setCollectTable((prev) => [...prev, {
                    key: item._id,
                    date: item.preferredDate,
                    fromTime: item.fromTime,
                    toTime: item.toTime,
                    change: item.bringChangeFor,
                    address: item.address,
                    status: item.status
                }])
            })
        }
        
    }, [data])

    async function onFinish(val: any) {
        const payload = {
            name: val.name,
            mobileNo: val.mobileNo,
            address: val.address,
            preferredDate: val.preferredDate,
            bringChangeFor: val.bringChangeFor,
            fromTime: val.time[0].$d,
            toTime: val.time[1].$d
        }

        // console.log(payload);
        
        await collect(payload).unwrap().then(res => {
            // console.log(res)
            if(res.success){
                message.success(res.message || 'Request sent successfully')
            }
        }).catch(err => {
            console.log(err)
            message.error(err.message || 'Something went wrong')
                
        })
    }

    const columns: ColumnsType<DataType> = [
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
          render: (date) => new Date(date).toLocaleDateString()
        },
        {
            title: 'From',
            dataIndex: 'fromTime',
            key: 'fromTime',
            render: (fromTime) => new Date(fromTime).toLocaleTimeString()
            },
            {
            title: 'To',
            dataIndex: 'toTime',
            key: 'toTime',
            render: (toTime) => new Date(toTime).toLocaleTimeString()
            },
        {
            title: 'Change',
            dataIndex: 'change',
            key: 'change',
            render: (change) => <Tag color="blue" key={change}>₹ {change}</Tag>
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (_, {status, key}) => (
                    <Tag color={status === 'completed' ? 'green' : 'warning'} style={{textTransform: 'capitalize'}} key={key}>
                        {status}
                    </Tag>
            )
        },
        
      ];

    return (
        <>
        <div className='recharge-screen'>
            <div className="rechargeHead">
                <h2>Request to collect payment</h2>
            </div>
            <div className="collect">
                <Form name="basic"
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 16 }}
                    labelAlign="left"
                    form={form}
                    initialValues={{ bringChangeFor: 0 }}
                    onFinish={(val) => onFinish(val)}
                    autoComplete="off">
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please type Name!' }]}
                    >
                        <Input placeholder='Name' />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="mobileNo"
                        rules={[{ required: true, message: 'Please enter number with 10 digit!' }]}
                    >
                        <InputNumber addonBefore='+91' maxLength={10} style={{ width: "fit-content" }} placeholder='Phone number' />
                    </Form.Item>
                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: 'Please fill you address' }]}
                    >
                        <Input.TextArea placeholder='Address' />
                    </Form.Item>
                    <Form.Item
                        label="Preferred Date"
                        name="preferredDate"
                        rules={[{ required: true, message: 'Please pick date!' }]}
                    >
                        <DatePicker format="DD/MM/YYYY" />
                    </Form.Item>
                    <Form.Item
                        label="Time"
                        name="time"
                        rules={[{ required: true, message: 'Please pick time!' }]}
                    >
                        <TimePicker.RangePicker use12Hours />
                    </Form.Item>
                    <Form.Item name='bringChangeFor' label="Changes">
                        <Radio.Group>
                            <Radio value={0}>I have sufficient change</Radio>
                            <Radio value={500}>Bring change for 500</Radio>
                            <Radio value={2000}>Bring change for 2000</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button loading={isLoading} type='primary' htmlType='submit'>Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>

        <div style={{margin: 50}}>
        <Table columns={columns} bordered  dataSource={collectTable} loading={tableLoading} scroll={{x: 1000}} title={
            () => <h2>History</h2>
        } pagination={{
            total: data?.totalCount,
            showSizeChanger: false,
            current: page,
            onChange: (page) => setPage(page)
        }}/>
        </div>
        </>
    )
}

export default Collect