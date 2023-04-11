import { userDetailsList } from '@/types/global';
import { Button, Image, List } from 'antd'
import React, { useState } from 'react'
import moment from 'moment';
import { useSelector } from 'react-redux';

type Props = {}




function Info() {
    const user = useSelector((state: any) => state.auth.user)

    // console.log(user);
    

    const [myArray] = useState<userDetailsList[]>([
        {
            title: "Id",
            value: user._id,
            type: 'text'
        },
        {
            title: 'userName',
            value: user.userName,
            type: 'text'
        },
        {
            title: 'accountActivation',
            value: user.accountActivation,
            type: 'date'
        },
        {
            title: "Create At",
            value: user.createdAt,
            type: 'date'
        },
        {
            title: 'lastLogin',
            value: user.lastLogin,
            type: 'date'
        },
        {
            title: 'address',
            value: user.address,
            type: 'text'
        },
        {
            title: 'mobileNo',
            value: user.mobileNo,
            type: 'number'
        },
        {
            title: 'name',
            value: user.name,
            type: 'text'
        },
        {
            title: 'addressProof',
            value: user.addressProof,
            type: 'image'
        },
        {
            title: 'caf',
            value: user.caf,
            type: 'image'
        },
        {
            title: 'idProof',
            value: user.idProof,
            type: 'image'
        },
        {
            title: 'profile',
            value: user.profile,
            type: 'image'
        },
    ])
    
    return (
        <List
            // size='large'
            header={<h3>Information</h3>}
            bordered
            dataSource={myArray}
            renderItem={(items) => {

                return (

                    <List.Item>
                        <List.Item.Meta
                            description={<ListOrder {...{ ...items }} />}
                        />
                    </List.Item>
                )
            }}
        />
    )
}

const ListOrder = (list: userDetailsList) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className='info-list'>

            <h4>{list.title} :</h4>
            {(list.type === 'text' || list.type === 'number') && <p>{list.value}</p>}
            {list.type === 'date' && <p>{moment(list.value).format('DD/MM/YYYY')}</p>}
            {list.type === 'image' && <>
                <Button type="primary" onClick={() => setVisible(true)}>
                    show image preview
                </Button>
                <Image
                    width={200}
                    style={{ display: 'none', color: 'black' }}
                    src={list.value}
                    preview={{
                        visible,
                        src: list.value,
                        onVisibleChange: (value) => {
                            setVisible(value);
                        },
                    }}
                />
            </>}


        </div>
    )
}

export default Info