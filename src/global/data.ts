import { MenuItem } from "@/types/global";
import { FrownOutlined } from "@ant-design/icons";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SignalWifi4BarIcon from '@mui/icons-material/SignalWifi4Bar';
import HelpIcon from '@mui/icons-material/Help';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SignalWifiStatusbarConnectedNoInternet4Icon from '@mui/icons-material/SignalWifiStatusbarConnectedNoInternet4';
import PaymentIcon from '@mui/icons-material/Payment';
import { MenuProps } from "antd";

export const plans = [
    {
        amount: '₹ 299',
        validity: '1 Month',
        planDetails: "1 Year of Xstream premium, Wynk & much more",
        planName: 'Basic',
        speed: 'Up to 40 Mbps'
    },
    {
        amount: '₹ 599',
        validity: '2 Month',
        planDetails: '1 year of Disney+ Hotstar & 10 more OTT apps 300+ TV channels Extra & much more',
        planName: 'Basic + TV',
        speed: 'Up to 100 Mbps'
    },
    {
        amount: '₹ 799',
        validity: '3 Month',
        planDetails: '1 year of Amazon Prime, Disney+ Hotstar, 10 more OTT apps & much more',
        planName: 'Entertainment',
        speed: 'Up to 200 Mbps'
    },
]

export const RechargePlans = [
    {
        amount: '₹ 299',
        validity: '1 Month',
        planDetails: "1 Year of Xstream premium, Wynk & much more",
        planName: 'Basic',
        speed: 'Up to 40 Mbps'
    },
    {
        amount: '₹ 599',
        validity: '2 Month',
        planDetails: '1 year of Disney+ Hotstar & 10 more OTT apps 300+ TV channels Extra & much more',
        planName: 'Basic + TV',
        speed: 'Up to 100 Mbps'
    },
    {
        amount: '₹ 799',
        validity: '3 Month',
        planDetails: '1 year of Amazon Prime, Disney+ Hotstar, 10 more OTT apps & much more',
        planName: 'Entertainment',
        speed: 'Up to 200 Mbps'
    },
    {
        amount: '₹ 1099',
        validity: '3 Month',
        planDetails: '1 year of Amazon Prime, Disney+ Hotstar, 10 more OTT apps & much more',
        planName: 'Entertainment + TV',
        speed: 'Up to 200 Mbps'
    },
    {
        amount: '₹ 1099',
        validity: '3 Month',
        planDetails: '1 year of Amazon Prime, Disney+ Hotstar, 10 more OTT apps & much more',
        planName: 'Entertainment + TV + OTT',
        speed: 'Up to 200 Mbps'
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
            title: 'Help Desk',
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



export const DashBoardLiquid = {
  percent: 0.55,
  outline: {
      border: 10,
      distance: 0,
  },
  wave: {
      length: 128,
  },
  statistic: {
      content: {
          formatter: () => `Today Data Usage 55%`,
      },
  },
};

export const DataLeft = {
    // height: 100,
    // width: 100,
    autoFit: false,
    percent: 0.2,
    color: ['#5B8FF9', '#E8EDF3'],
    statistic: {
      content: {
          formatter: () => `22 Day left`,
      },
  },
  }

 export const items: MenuProps['items'] = [
  
  getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')]),
];

export const helpMethod = [
  {
    title: 'Service',
    icon: HomeRepairServiceIcon
  },
  {
    title: 'Technical',
    icon: SignalWifiStatusbarConnectedNoInternet4Icon
  },
  {
    title: 'Payment',
    icon: PaymentIcon
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

