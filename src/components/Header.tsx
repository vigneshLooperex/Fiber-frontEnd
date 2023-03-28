import { Drawer, Menu } from 'antd'
import React, { useState, useEffect } from 'react'
import { MenuOutlined, UserOutlined, LinkOutlined } from '@ant-design/icons'
import Login from '../modal/Login';
import { LoginModalState, MenuItem } from '@/types/global';
import { getItem } from '@/global/data';

export const MenuList: MenuItem[] = [

    getItem(
        <a href="#plans" >
            Plan Details
        </a>,
        'link',
        <LinkOutlined />,
    ),
    getItem(
        <a href="#contact" >
            Contact Us
        </a>,
        'link',
        <LinkOutlined />,
    ),
    getItem(
        <a href="#contact" >
            About us
        </a>,
        'link',
        <LinkOutlined />,
    ),
];


function Header() {
    const [open, setOpen] = useState<boolean>(false);
    const [loginModal, setLoginModal] = useState<LoginModalState>({
        open: false
    })

    return (
        <>
            <header>
                <div className='mobile'>
                    <MenuOutlined onClick={() => setOpen(true)} />
                    <div>
                        <p>Logo</p>
                    </div>
                    <UserOutlined onClick={() => setLoginModal((pre) => ({ ...pre, open: true }))} />
                </div>
                <div className='desktop'>
                    <p>Logo</p>
                </div>
                <div className='desktop'>
                    <a href='#plans'>Plan details</a>
                    <a href='#contact'>Contact us</a>
                    <a href='#contact'>About us</a>
                    <a onClick={() => setLoginModal((pre) => ({ ...pre, open: true }))}>Login</a>
                </div>
            </header>
            <Drawer title="Menu" placement="left" onClose={() => setOpen(false)} open={open}>
                {/* <a>Plan details</a>
                <a>Contact us</a>
                <a>About us</a>
                <a>Login</a> */}

                <Menu
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    items={MenuList}
                />
            </Drawer>
            <Login {...{ ...loginModal, setLoginModal }} />
        </>
    )
}

export default Header