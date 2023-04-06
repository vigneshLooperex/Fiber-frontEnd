import { setCredentials } from '@/redux/slice/authSlice';
import { KeyOutlined, LogoutOutlined, MailOutlined, PhoneOutlined, PushpinOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Image } from 'antd'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const { Meta } = Card;


const UserProfile = () => {

    return (
        <Meta
            avatar={<UserImage />}
            title={<UserTitle />}
            description={<UserDesc />}
        />
    )
}

const UserDesc = () => {
    return (
        <div className='user-decs-list'>
            <div className='user-decs'>
                <UserOutlined className='userIcon' />
                <p>nsk.venkat (VENKATACHALAM)</p>
            </div>
            <a className='user-decs'>
                <KeyOutlined className='userIcon' />
                <Link to='/change-password'>Change Password</Link>
            </a>
            <div className='user-decs'>
                <PhoneOutlined className='userIcon' />
                <p>7989702293</p>
            </div>
            <div className='user-decs'>
                <MailOutlined className='userIcon' />
                <p>venkatachalam26992@gmail.com</p>
            </div>
            <div className='user-decs'>
                <PushpinOutlined className='userIcon' />
                <p>No 10 thiyagarajar colony thiruvaiyaru</p>
            </div>
        </div>
    )
}

const UserImage = () => {
    return (
        <Image
            // width={350}
            src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png`}
        />
    )
}

const UserTitle = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate()

    function logOut() {
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
        <div className='user-title-logout'>
            <h2>Rani</h2>
            <LogoutOutlined onClick={logOut} style={{ fontSize: 20, cursor: 'pointer' }} />
        </div>
    )
}

export default UserProfile