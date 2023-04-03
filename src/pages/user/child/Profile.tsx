import React, { useState } from 'react'
import { Avatar, Card } from 'antd'
import UserProfile from '@/components/UserProfile';
import Info from '@/components/Info';
import BillInfo from '@/components/BillInfo';

const { Meta } = Card;

type Props = {}

const tabList = [
    {
        key: 'Info',
        tab: 'Info',
    },
    {
        key: 'Billing',
        tab: 'Billing',
    },
];

const contentList: Record<string, React.ReactNode> = {
    Info: <Info />,
    Billing: <BillInfo />,
};


const Profile = (props: Props) => {
    const [activeTabKey1, setActiveTabKey1] = useState<string>('Info');

    const onTab1Change = (key: string) => {

        setActiveTabKey1(key);
    };
    return (
        // <div className='recharge-screen'>
        <div className='profile-screen'>
            <Card
                className='profile-Card'
                title={<UserProfile />}
                tabList={tabList}

                activeTabKey={activeTabKey1}
                onTabChange={onTab1Change}
            >

                {contentList[activeTabKey1]}
            </Card>
        </div>
        // </div>
    )
}

export default Profile