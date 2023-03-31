import { Button, DatePicker, Form, Input, InputNumber, Radio, TimePicker } from 'antd'
import React from 'react'

type Props = {}

const Collect = (props: Props) => {
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

                    initialValues={{ remember: true }}
                    onFinish={(val) => console.log(val)}
                    autoComplete="off">
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please type Name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{ required: true, message: 'Please enter number with 10 digit!' }]}
                    >
                        <InputNumber type='number' style={{ width: 200 }} maxLength={10} />
                    </Form.Item>
                    <Form.Item
                        label="Preferred Date"
                        name="date"
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
                    <Form.Item name='changes' label="Changes">
                        <Radio.Group defaultValue='I have sufficient change'>
                            <Radio value="I have sufficient change">I have sufficient change</Radio>
                            <Radio value="Bring change for 500">Bring change for 500</Radio>
                            <Radio value="Bring change for 2000">Bring change for 2000</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type='primary' htmlType='submit'>Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Collect