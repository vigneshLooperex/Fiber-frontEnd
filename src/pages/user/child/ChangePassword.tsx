import { useChangePasswordMutation } from '@/redux/service/authApi';
import { Button, Form, Input, message } from 'antd'
import { useNavigate } from 'react-router-dom';

type Props = {}

function ChangePassword({ }: Props) {
    const [changePassword, { isLoading }] = useChangePasswordMutation()
    const [messageApi] = message.useMessage()
    const navigate = useNavigate()

    const validateoldPassword = ({ getFieldValue }: any) => ({
      validator(_:any, value:any) {
        if (!value || getFieldValue('newPassword') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('The two passwords that you entered do not match!'));
      },
    });

    const onFinish = async(values: any) => {
        delete values.confirmPassword
        // console.log('Success:', values);

        try{
            const res = await changePassword(values).unwrap()
            if(res.success)  {
                message.open({
                    type: 'success',
                    content: res.message,
                })    
                navigate('/profile')
            } 
            else message.open({
                type: 'error',
                content:'Something went wrong',
            })

        }catch(err:any) {
            console.log('error', err)
            message.open({
                type: 'error',
                content: err?.data.message || 'Something went wrong',
            })
        }
    };


    return (
        <div className='change-password-screen'>
            <div className='change-password'>
                <div className="rechargeHead">
                    <h2>Change Password</h2>
                </div>


                <Form
                    name="basic"
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Old Password "
                        name="oldPassword"
                        rules={[{ required: true, message: 'Old Password Required!' }]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="New Password "
                        name="newPassword"
                        rules={[{ required: true, message: 'New Password Required!' }]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="confirmPassword"
                        dependencies={['newPassword']}
                        rules={[
                        { required: true, message: 'Confirm Password Required!' },
                        validateoldPassword,
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                        <Button type="primary" htmlType="submit" loading={isLoading}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default ChangePassword