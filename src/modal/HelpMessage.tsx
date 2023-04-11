import { useSendReportMutation } from '@/redux/service/userApi';
import { HelpModalProps } from '@/types/global';
import { Button, Form, Modal, Input, Radio, message } from 'antd'
import React, { useState } from 'react'

const { TextArea } = Input;

function HelpMessage(props: HelpModalProps) {
    const { open, serviceType, setModalHelp, list } = props
    const [sendReport, {isLoading}] = useSendReportMutation()

    const [form] = Form.useForm();    
    const [otherFeild, setOtherFeild] = useState<string>('')

    const cancel = () => {
        setModalHelp((pre) => ({ ...pre, open: false }))
    }

    const onFinish = async(values: any) => {

        const payload = {
            ...values,
            category: serviceType
        }

        const res = await sendReport(payload).unwrap()

        if (res.success) {
            setModalHelp((pre) => ({ ...pre, open: false }))

            message.open({
                type: 'success',
                content: res.message,
              });

        } else{
            message.open({
                type: 'error',
                content: 'Something went wrong',
              });
        }
        
    
      };

    return (
        <Modal
            open={open}
            title={`${serviceType.charAt(0).toUpperCase()}${serviceType.slice(1).toLowerCase()} issue`}
            onCancel={cancel}
            footer = {null}
        >
            <Form layout='vertical' onFinish={onFinish} form={form} >
                <Form.Item name='subCategory'>
                    <Radio.Group  style={{display: 'flex', flexDirection: 'column',rowGap: 10}} onChange={(e:any) => setOtherFeild(e.target.value)}>
                        {list?.map((item:any, i) => <Radio key={i} value={item}>{item}</Radio>)}
                    </Radio.Group>
                </Form.Item>
                {otherFeild === "OTHERS" && 
                    <Form.Item name='message' label='Other'>
                    <TextArea rows={4} placeholder="Type the issue" />
                </Form.Item> }
                
                <Form.Item >
                    <Button loading={isLoading} key="submit" htmlType='submit' type="primary">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default HelpMessage