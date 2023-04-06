import { useLoginMutation } from '@/redux/service/authApi';
import { LoginModalProps } from '@/types/global';
import { Button, Form, Input, Modal } from 'antd'
import React, { Dispatch, SetStateAction } from 'react'



function Login(props: LoginModalProps) {
    const { open, setLoginModal } = props
    const [login] = useLoginMutation()

    const onFinish = async (values: any) => {
        // console.log('Payload:', values);

         await login(values).unwrap()


    };

    return (
        <Modal title="Login" footer={null} open={open} onCancel={() => setLoginModal((pre) => ({ ...pre, open: false }))}>
            <Form
                name="basic"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16 }}
                // style={{ maxWidth: 600 }}
                // initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="userName"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 10, span: 8, xs: { offset: 9, span: 8 }, }} >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default Login