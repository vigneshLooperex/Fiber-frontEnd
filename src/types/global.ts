// export {}
import React from "react";
import { MenuProps, Space, Table, Tag  } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Dispatch, SetStateAction } from "react";

export type MenuItem = Required<MenuProps>['items'][number];

export interface LoginModalState {
    open: boolean
}

export interface LoginModalProps {
    // loginModal: {
        open: boolean
    setLoginModal: Dispatch<SetStateAction<LoginModalState>>;
    // }
    
}

export interface HelpModalState {
    open: boolean,
    serviceType: string,
    list: []
}

export interface HelpModalProps {
    open: boolean,
    serviceType: string,
    list: [],
    setModalHelp: Dispatch<SetStateAction<HelpModalState>>
}


//Billing section

interface tagObject {
  title: string;
  link: string;
}

export interface ColumnDataType {
  key: string;
  no: number;
  date: string; 
  amount: number;
  status: string;
  plan: string;
  datails: tagObject[];
}

export const TableData: ColumnDataType[] = [
    {
    key: "1",
    no: 32,
    date: "13/06/2002",
    amount: 800,
    status: 'pending',
    plan: 'Basic plan',
    datails: [
    //   { title: "Paid", link: "#" },
      { title: "bill", link: "#" }
    ],
  },
  {
    key: "2",
    no: 32,
    date: "13/06/2002",
    amount: 800,
    status: 'paid',
    plan: 'Premium plan',
    datails: [
      { title: "Paid", link: "#" },
      { title: "bill", link: "#" }
    ],
  },
  {
    key: "3",
    no: 42,
    date: "13/06/2002",
    amount: 800,
    status: 'paid',
    plan: 'Entertaiment plan',
    datails: [
      { title: "Paid", link: "#" },
      { title: "bill", link: "#" }
    ],
  },
  
];

// Data usage

export interface DataUsageType {
  key: string;
  date: string;
  download: string;
  upload: string;
  total: string;
  url: string;
}

export const DataUsageList: DataUsageType[] = [
  {
    key: '1',
    date: '10/01/2022',
    download: "10.5 GB",
    upload: '6.12 GB',
    total: '15.8 GB',
    url: '#'
  },
  {
    key: '2',
    date: '10/01/2022',
    download: "11.5 GB",
    upload: '8.58 GB',
    total: '15.8 GB',
    url: '#'
  },
  {
    key: '3',
    date: '10/01/2022',
    download: "8.5 GB",
    upload: '6.12 GB',
    total: '15.8 GB',
    url: '#'
  },
];


// user

export interface userDetailsList{
  title: string,
  value: string,
  type: string,

}
