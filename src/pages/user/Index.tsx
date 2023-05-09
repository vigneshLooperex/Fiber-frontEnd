import { nav } from '@/global/data'
import { Anchor, Badge, Drawer } from 'antd'
import { BellOutlined, LogoutOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials, useAuth } from '@/redux/slice/authSlice';
import notify from '@/notify';


function Index() {
  const { pathname } = useLocation()
  const navigation = useNavigate()
  const dispatch = useDispatch()
  const {user}:any = useAuth()
  
  
  const [menu, setMenu] = useState(false)


  const logOut = () => {
    console.log('Log out');

        navigation('/')
        localStorage.removeItem("refreshToken");
        dispatch(setCredentials({
            token: '',
            user: {},
            isAuthenticate: false,
            logIn: false
        }))
  }

  return (
    <div>
      <Anchor
        direction="horizontal"
        className='home-desktop'
        // style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
      >
        <div className='disktop-menu'>
          {nav.map((item, i) => <Link key={i} to={item.href} className={pathname === item.href ? 'nav-links nav-active' : 'nav-links'} ><item.icon />{item.title}</Link>)}
        </div>
        <div className='desktop-right-icons'>
          <Link to="" onClick={() => console.log('notify')} className='nav-links'><Badge dot={user?.notify}><BellOutlined  style={{fontSize: 22}}/></Badge>Notification</Link>
          <Link to="" onClick={() => logOut()} className='nav-links'><LogoutOutlined style={{fontSize: 22}}/> LogOut</Link>
        </div>

      </Anchor>
      <div className='home-mobile'>
        <MenuOutlined onClick={() => setMenu(true)} />
        <p>Logo</p>
        <p></p>
      </div>
      <Outlet />
      <Drawer title="Menu" footer={null} style={{maxWidth: 280}}      placement="left" onClose={() => setMenu(false)} open={menu}>
        <div className='mobile-menu'>
          {nav.map((item, i) => <Link key={i} onClick={() => setMenu(false)} to={item.href} className={pathname === item.href ? 'nav-links nav-active' : 'nav-links'} ><item.icon />{item.title}</Link>)}
        </div>
        <div>
          <Link to="" onClick={() => logOut()} className='nav-links'><LogoutOutlined style={{fontSize: 22}}/> LogOut</Link>
        </div>
      </Drawer>
    </div>
  )
}

export default Index