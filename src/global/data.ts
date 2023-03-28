import { MenuItem } from "@/types/global";
import { FrownOutlined } from "@ant-design/icons";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SignalWifi4BarIcon from '@mui/icons-material/SignalWifi4Bar';
import HelpIcon from '@mui/icons-material/Help';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const plans = [
    {
        amount: '₹ 299',
        validity: '1 Month'
    },
    {
        amount: '₹ 599',
        validity: '2 Month'
    },
    {
        amount: '₹ 799',
        validity: '3 Month'
    },
]

export const offer = [
    {
        name: 'Prepaid',
        link: '#'
    },
    {
        name: 'PostPaid',
        link: '#'
    },
    {
        name: 'Services',
        link: '#'
    },
    {
        name: 'Devices',
        link: '#'
    },
]


export const aboutus = [
    {
        name: 'Teams & Conditions',
        link: '#'
    },
    {
        name: 'Privacy Policy',
        link: '#'
    },
    {
        name: 'Locate us',
        link: '#'
    },
    {
        name: 'Customer support',
        link: '#'
    },
]

export const nav = [
          {
            href: '/',
            title: `Dashboard`,
            icon: DashboardIcon
          },
          {
            href: '/recharge',
            title: 'Recharge',
            icon: SignalWifi4BarIcon
          },
          {
            href: '/help',
            title: 'Help Disk',
            icon: HelpIcon
          },
          {
            href: '/bill',
            title: 'Bills',
            icon: ReceiptIcon
          },
          {
            href: '/collect',
            title: 'Collect Payments',
            icon: AccountBalanceWalletIcon
          },
          {
            href: '/usage',
            title: 'Data usage',
            icon: DataSaverOffIcon
          },
          {
            href: '/profile',
            title: 'View Profile',
            icon: AccountCircleIcon
          },
        ]

export function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

