import { HelpModalProps } from '@/types/global';
import { Button, Form, Modal, Input, Radio } from 'antd'
import React, { useState } from 'react'

const { TextArea } = Input;

function HelpMessage(props: HelpModalProps) {
    const { open, serviceType, setModalHelp, list } = props
    const [loading, setLoading] = useState(false);

    // console.log(list);
    

    const cancel = () => {
        setModalHelp((pre) => ({ ...pre, open: false }))
    }
    
    const onOkay = (event:any) => {
        event.preventDefault()
        console.log(event);
        
    }

    return (
        <Modal
            open={open}
            title={`${serviceType.charAt(0).toUpperCase()}${serviceType.slice(1).toLowerCase()} issue`}
            onOk={onOkay}
            onCancel={cancel}
            footer={[
                <Button key="back" onClick={cancel}>
                    Return
                </Button>,
                <Button key="submit" type="primary" onClick={onOkay}>
                    Submit
                </Button>,
            ]}
        >
            <Form layout='vertical'>
                <Form.Item >
                    <Radio.Group style={{display: 'flex', flexDirection: 'column',rowGap: 10}}>
                        {list?.map((item:any, i) => <Radio key={i} value={item}>{item}</Radio>)}
                    </Radio.Group>
                </Form.Item>
                <Form.Item label='Other'>
                    <TextArea rows={4} placeholder="Type the issue" />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default HelpMessage