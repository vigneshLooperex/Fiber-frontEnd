import { getItem, RechargePlans } from '@/global/data';
import { Menu, MenuProps, Layout, Button } from 'antd'
import React, { useState } from 'react'

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const Recharge = () => {
    const [menuKey, setMenuKey] = useState("0")

    const items: MenuItem[] = RechargePlans.map((item, i) => getItem(item.planName, i));


    return (
        <div className='recharge-screen'>
            <div className="rechargeHead">
                <h2>Prepaid Recharge</h2>
                <h4>Your current Plan end on 31/05/2023</h4>
            </div>
            <div className='Recharge-box'>
                <div className='.home-mobile'>
                    <Menu theme="light" defaultSelectedKeys={['0']} onClick={(e) => setMenuKey(e.key)} selectable mode="inline" items={items} />
                </div>
                <Sider className='home-desktop'>
                    <Menu theme="light" defaultSelectedKeys={['0']} onClick={(e) => setMenuKey(e.key)} selectable mode="inline" items={items} />
                </Sider>
                <Layout className="site-layout">
                    <Content>
                        <div className='plan-desc'>
                            {RechargePlans.map((item, i) => {
                                if (i === parseInt(menuKey)) {
                                    return (
                                        <>
                                            <p>
                                                {item.planDetails} {item.validity} for {item.planName}
                                            </p>
                                            <div >
                                                <div className='plan-bill'>
                                                    <div>
                                                        Validy:<br />
                                                        Plan Amount:
                                                    </div>
                                                    <div>
                                                        {item.validity} <br />
                                                        {item.amount}<br />

                                                    </div>

                                                </div>
                                                <Button type='primary'>Recharge</Button>
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