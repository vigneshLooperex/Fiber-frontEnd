import AuthLoader from '@/components/AuthLoader'
import { helpMethod } from '@/global/data'
import HelpMessage from '@/modal/HelpMessage'
import { useGetHelpQuery } from '@/redux/service/userApi'
import { HelpModalState } from '@/types/global'
import React, { useState } from 'react'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import PaymentIcon from '@mui/icons-material/Payment';

const Help = () => {
    const {data, isLoading} = useGetHelpQuery({})
    const [modalHelp, setModalHelp] = useState<HelpModalState>({ open: false, serviceType: '', list: [] })

    // console.log(data);
    

    if(isLoading) return <AuthLoader />

    return (
        <div className='recharge-screen'>
            <div className="rechargeHead">
                <h2>How can we help you ?</h2>
            </div>
            <div className='help-issue'>
                {data?.globals.reportMainCategoryEnum.map((item:any, i:number) => {
                    return (
                        <a className='help-box' key={i} onClick={() => setModalHelp({
                            open: true,
                            serviceType: item,
                            list: item === 'services' ? data?.globals.serviceEnum : data?.globals.billingEnum
                        })}>
                            <i>
                                {item === 'services' ? <HomeRepairServiceIcon /> : <PaymentIcon/>}
                            </i>
                            <p>
                                {item}
                            </p>
                        </a>
                    )
                })}
            </div>
            <HelpMessage {...{ ...modalHelp, setModalHelp }} />
        </div>
    )
}

export default Help