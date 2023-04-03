import { DataUsageList, DataUsageType } from '@/types/global';
import { Button, Form, Table, Tag } from 'antd'
import { DatePicker, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { RangePicker } = DatePicker;


function Usage() {

    const renderDataUsage: ColumnsType<DataUsageType> = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Download',
            dataIndex: 'download',
            key: 'download',
        },
        {
            title: 'Upload',
            dataIndex: 'upload',
            key: 'upload',
        },
        {
            title: 'Total Usage',
            dataIndex: 'total',
            key: 'upload'
        },
        {
            title: 'Download',
            dataIndex: 'total',
            key: 'upload',
            align: 'center',
            render: (_, item) => (
                <>
                    <Tag style={{ cursor: 'pointer' }} color='blue-inverse'>PDF</Tag>
                </>
            )
        },
    ];

    return (
        <div className='recharge-screen'>
            <div className="rechargeHead">
                <h2>Data Usage</h2>
            </div>
            <div className='Data-usage'>
                <div>
                    <Form onFinish={(e) => console.log(e)} className='dataUsageForm'>
                        <Form.Item label="Filter" name='filter' rules={[{ required: true, message: 'Select any date' }]}>
                            <RangePicker />
                        </Form.Item>
                        <Form.Item >
                            <Button type='primary' htmlType='submit' >Submit</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div>
                    <Table columns={renderDataUsage} dataSource={DataUsageList} style={{ overflow: 'scroll' }} />
                </div>
            </div>
        </div>
    )
}

export default Usage