import { Modal } from 'antd';
import React from 'react'

type Props = {}

const InfoContact = (props: Props) => {
    Modal.info({
        title: 'Our Contact Details',
        content: (
          <div>
            <p>Customer Care: 1800 123 4567</p>
            <p>Technical Support: 1800 123 4567</p>
            <p>Email: fiber@gmail.com</p>
            <p>Address: 123, ABC Road, XYZ City, India</p>

          </div>
        ),
        onOk() {},
      });
}

export default InfoContact