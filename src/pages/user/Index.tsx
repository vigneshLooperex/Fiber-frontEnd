import { nav } from '@/global/data'
import { Anchor, Drawer } from 'antd'
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Index() {
  const { pathname } = useLocation()

  const [menu, setMenu] = useState(false)

  return (
    <div>
      <Anchor
        direction="horizontal"
        className='home-desktop'
      >
        {nav.map((item, i) => <Link key={i} to={item.href} className={pathname === item.href ? 'nav-links nav-active' : 'nav-links'} ><item.icon />{item.title}</Link>)}

      </Anchor>
      <div className='home-mobile'>
        <MenuOutlined onClick={() => setMenu(true)} />
        <p>Logo</p>
        <p></p>
      </div>
      <Outlet />
      <Drawer title="Menu" footer={null} placement="left" onClose={() => setMenu(false)} open={menu}>
        {nav.map((item, i) => <Link key={i} onClick={() => setMenu(false)} to={item.href} className={pathname === item.href ? 'nav-links nav-active' : 'nav-links'} ><item.icon />{item.title}</Link>)}
      </Drawer>
    </div>
  )
}

export default Index