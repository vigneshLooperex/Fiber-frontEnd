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


//context

export interface ToastContextType {
  success: () => void;
  error: () => void;
  // info: () => void;
  // warning: () => void;
}
export interface ToastProps {
  type: string;
  content: string;
}

export interface ToastValue {
  success: (content: ToastProps) => void;
  error: (content: ToastProps) => void;

}


export interface planData{
  _id: string,
  name: string,
  amount: number,
  validity: number,
  networkSpeed: number,
  data: string | number,
  notes?: string,
  active: boolean,
  createdAt: Date,
  updatedAt: Date,
}

export interface currentPlanData{
  validity: {
      from: Date,
      to:Date
  },
  id: string
}

export interface nextPlanData extends currentPlanData{
_id:string
}
export interface userData{
currentPlan?: currentPlanData,
_id: string,
name?: string,
userName: string,
email?: string,
mobileNo?: number,
address?: string,
accountActivation: Date,
referralCode: string,
nextPlan?: nextPlanData[],
createdAt: Date,
updatedAt:Date,
lastLogin: Date,
addressProof?: string,
caf?: string,
idProof?: string,
profile?: string,
}

export interface paymentData {
  _id:string,
  paymentMode: string,
  amount: number,
  bill_id: string,
  plan_id: planData,
  user_id:userData,
  createdAt: Date,
  updatedAt: Date,
}