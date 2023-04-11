import { useCollectMutation } from '@/redux/service/userApi'
import { Button, DatePicker, Form, Input, InputNumber, Radio, TimePicker, message } from 'antd'
import React from 'react'

const Collect = () => {
    const [collect, {isLoading}] = useCollectMutation()

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
                message.open({
                    type: 'success',
                    content: res.message,
                    
                })
            }
        }).catch(err => {
            console.log(err)
            message.open({
                type: 'error',
                content: "Something went wrong",
            })
                
        })
    }

    return (
        <div className='recharge-screen'>
            <div className="rechargeHead">
                <h2>Request to collect payment</h2>
            </div>
            <div className="collect">
                <Form name="basic"
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 16 }}
                    labelAlign="left"
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
                        <TimePicker.RangePicker />
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
    )
}

export default Collect