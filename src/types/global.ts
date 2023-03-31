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
    serviceType: string
}

export interface HelpModalProps {
    open: boolean,
    serviceType: string,
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



