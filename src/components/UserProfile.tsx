import { setCredentials } from '@/redux/slice/authSlice';
import { KeyOutlined, LogoutOutlined, MailOutlined, PhoneOutlined, PushpinOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Image } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
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
    const user = useSelector((state: any) => state.auth.user)

    const { userName, mobileNo, address } = user

    const datas = [
        {Icon: UserOutlined, title: userName, tags: 'p', },
        {Icon: KeyOutlined, title: 'Change Password',tags: 'Link', },
        {Icon: PhoneOutlined, title: mobileNo, tags: 'p', },
        // {Icon: MailOutlined, title: 'venkatachalam26992@gmail.com' , tags: 'p', },
        {Icon: PushpinOutlined, title: address,tags: 'p', },

    ]
    
    return (
        <div className='user-decs-list'>
            {datas.map((data, index) => {
                const { Icon, title, tags } = data
                return (
                    <div className='user-decs' key={index}>
                        <Icon className='userIcon' />
                        {tags === 'p' ? <p>{title}</p> : <Link to='/change-password'>{title}</Link>}
                    </div>
                )
            })
            }
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

    const user = useSelector((state: any) => state.auth.user)

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
            <h2>{user.userName}</h2>
            <LogoutOutlined onClick={logOut} style={{ fontSize: 20, cursor: 'pointer' }} />
        </div>
    )
}

export default UserProfile