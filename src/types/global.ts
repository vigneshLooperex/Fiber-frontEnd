// export {}

import { MenuProps } from "antd";
import { Dispatch, SetStateAction } from "react";

export interface LoginModalState {
    open: boolean
}


export type MenuItem = Required<MenuProps>['items'][number];

export interface LoginModalProps {
    // loginModal: {
    open: boolean
    setLoginModal: Dispatch<SetStateAction<LoginModalState>>;
    // }

}