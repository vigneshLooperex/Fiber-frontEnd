import { HelpModalProps } from '@/types/global';
import { Button, Form, Modal, Input } from 'antd'
import React, { useState } from 'react'

const { TextArea } = Input;

function HelpMessage(props: HelpModalProps) {
    const { open, serviceType, setModalHelp } = props
    const [loading, setLoading] = useState(false);

    const cancel = () => {
        setModalHelp((pre) => ({ ...pre, open: false }))
    }

    return (
        <Modal
            open={open}
            title={`${serviceType} issue`}
            onOk={cancel}
            onCancel={cancel}
            footer={[
                <Button key="back" onClick={cancel}>
                    Return
                </Button>,
                <Button key="submit" type="primary" onClick={cancel}>
                    Submit
                </Button>,
            ]}
        >
            <Form>
                <Form.Item label={serviceType}>
                    <TextArea rows={4} placeholder="Type the issue" />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default HelpMessage