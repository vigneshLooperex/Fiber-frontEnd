import { getItem, RechargePlans } from '@/global/data';
import { useGetPlansQuery, useRechargeMutation } from '@/redux/service/userApi';
import { Menu, MenuProps, Layout, Button, message } from 'antd'
import React, { useState } from 'react'

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const Recharge = () => {
    const [menuKey, setMenuKey] = useState("0")
    const [messageApi] = message.useMessage()

    const {data} = useGetPlansQuery({})
    const [recharge, {isLoading}] = useRechargeMutation()
    
    // console.log(data)

    const items: MenuItem[] = data?.plans.map((item:any, i:any) => getItem(`${item.name} Pack`, i));

    async function handleRecharge(id:any) {

        const payload = { planId: id }
        // console.log(id)

        try{
            const res = await recharge(payload).unwrap()
            if(res.success === true)  message.open({
                type: 'success',
                content: res.message,
            })  
            else message.open({
                type: 'error',
                content:'Something went wrong',
            })
        } catch(err) {
            console.log(err)
            message.open({
                type: 'error',
                content: 'Something went wrong',
            })
        }
        

    }



    return (
        <div className='recharge-screen'>
            <div className="rechargeHead">
                <h2>Prepaid Recharge</h2>
                <h4>Your current Plan end on 31/05/2023</h4>
            </div>
            <div className='Recharge-box'>
                <div className='.home-mobile'>
                    <Menu theme="light" defaultSelectedKeys={['0']} style={{ textTransform: 'capitalize'}} onClick={(e) => setMenuKey(e.key)} selectable mode="inline" items={items} />
                </div>
                <Sider className='home-desktop'>
                    <Menu theme="light" defaultSelectedKeys={['0']} style={{ textTransform: 'capitalize'}}  onClick={(e) => setMenuKey(e.key)} selectable mode="inline" items={items} />
                </Sider>
                <Layout className="site-layout">
                    <Content>
                        <div className='plan-desc'>
                            {data?.plans.map((item:any, i:any) => {
                                if (i === parseInt(menuKey)) {
                                    return (
                                        <>
                                            <p>
                                                {item.notes} {item.validity} days for {item.name}
                                            </p>
                                            <div >
                                                <div className='plan-bill'>
                                                    <div>
                                                        Validy:<br />
                                                        Plan Amount:
                                                    </div>
                                                    <div>
                                                        {item.validity} days<br />
                                                        ₹ {item.amount}<br />

                                                    </div>

                                                </div>
                                                <Button loading={isLoading} type='primary' onClick={() => handleRecharge(item._id)}>Recharge</Button>
                                            </div>
                                        </>
                                    )
                                }
                            })}

                        </div>
                    </Content>
                </Layout>
            </div>
        </div>
    )
}

export default Recharge