import {createBrowserRouter, RouteObject} from 'react-router-dom'
import AuthHome from '@/pages/auth/Index'
import UserHome from '@/pages/user/Index'
import ErrorPage from '@/pages/ErrorPage'
import DashBoard from '@/pages/user/child/DashBoard'
import Recharge from '@/pages/user/child/Recharge'
import Help from '@/pages/user/child/Help'
import Bill from '@/pages/user/child/Bill'
import Collect from '@/pages/user/child/Collect'
import Usage from '@/pages/user/child/Usage'
import Profile from '@/pages/user/child/Profile'
import ChangePassword from '@/pages/user/child/ChangePassword'

const auth: RouteObject[] = [
    {
        path: '/',
        Component: AuthHome,
        ErrorBoundary: ErrorPage
    },
    
]

const account:RouteObject[] = [
{
    path: '/',
    Component: UserHome,
    ErrorBoundary: ErrorPage,
    children: [
        {
            path: '/',
            Component: DashBoard
        },
        {
            path: '/recharge',
            Component: Recharge
        },
        {
            path: '/help',
            Component: Help,
        },
        {
            path: '/bill',
            Component: Bill,
        },
        {
            path: '/collect',
            Component: Collect,
        },
        {
            path: '/usage',
            Component: Usage,
        },
        {
            path: '/profile',
            Component: Profile,
        },
        {
            path: '/change-password',
            Component: ChangePassword,
        },
    ]
}
]

export const route = createBrowserRouter(account)