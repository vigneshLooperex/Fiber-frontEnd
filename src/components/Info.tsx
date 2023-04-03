import { userDetailsList } from '@/types/global';
import { Button, Image, List } from 'antd'
import React, { useState } from 'react'
import moment from 'moment';

type Props = {}


const myArray: userDetailsList[] = [
    {
        title: "Id",
        value: "641c51684224984856dddb3a",
        type: 'text'
    },
    {
        title: 'userName',
        value: "vijeeth",
        type: 'text'
    },
    {
        title: 'accountActivation',
        value: '2023-03-23T13:17:16.770Z',
        type: 'date'
    },
    {
        title: "Create At",
        value: "2023-03-23T13:17:28.824Z",
        type: 'date'
    },
    {
        title: 'lastLogin',
        value: '2023-04-03T05:42:56.878Z',
        type: 'date'
    },
    {
        title: 'address',
        value: 'looperex ,thillai nagar trichy',
        type: 'text'
    },
    {
        title: 'mobileNo',
        value: '7708783714',
        type: 'number'
    },
    {
        title: 'name',
        value: 'vijeeth',
        type: 'text'
    },
    {
        title: 'addressProof',
        value: 'https://thenistorage.s3.ap-south-1.amazonaws.com/devDash/vijeeth/AddressProof.jpg',
        type: 'image'
    },
    {
        title: 'caf',
        value: 'https://thenistorage.s3.ap-south-1.amazonaws.com/devDash/vijeeth/CAF.png',
        type: 'image'
    },
    {
        title: 'idProof',
        value: 'https://thenistorage.s3.ap-south-1.amazonaws.com/devDash/vijeeth/IdProof.JPG',
        type: 'image'
    },
    {
        title: 'profile',
        value: 'https://thenistorage.s3.ap-south-1.amazonaws.com/devDash/vijeeth/Profile.png',
        type: 'image'
    },
];


function Info(props: Props) {
    const { } = props

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
                            title={<ListOrder {...{ ...items }} />}
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
                    style={{ display: 'none' }}
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