import { Button, Form, Input } from 'antd'
import React from 'react'

type Props = {}

function ChangePassword({ }: Props) {

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    return (
        <div className='change-password-screen'>
            <div className='change-password'>
                <div className="rechargeHead">
                    <h2>Change Password</h2>
                </div>


                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Old Password "
                        name="oldPassword"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="New Password "
                        name="newPassword"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default ChangePassword