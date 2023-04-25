import AuthLoader from '@/components/AuthLoader'
import { helpMethod } from '@/global/data'
import HelpMessage from '@/modal/HelpMessage'
import { useGetHelpQuery } from '@/redux/service/userApi'
import { HelpModalState } from '@/types/global'
import React, { Suspense, useState } from 'react'
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import PaymentIcon from '@mui/icons-material/Payment';
import Message from '@/assets/svg/Message'
import InfoContact from '@/modal/InfoContact'

const Help = () => {
    const {data, isLoading} = useGetHelpQuery({})
    const [modalHelp, setModalHelp] = useState<HelpModalState>({ open: false, serviceType: '', list: [] })

    // console.log(data);
    

    // if(isLoading) return <AuthLoader />

    return (
        // <div className='recharge-screen'>
        //     <div className="rechargeHead">
        //         <h2>How can we help you ?</h2>
        //     </div>

        <div>
            <div className="help-banner">
                <p>Welcome to fiber support</p>
                <p>How can we help you ?</p>
            </div>

            <div className='help-title-issue'>
                <p>Categories of issue</p>
            </div>

            <div className='help-issue'>
                {data?.globals.reportMainCategoryEnum.length === 0 && 'No data found'}
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
            <div className="guide" id='contact' style={{marginTop: 50}}>
                <p className="guideText">
                    Need guidance?
                </p>
                <div className="guideButton">
                    <button  onClick={InfoContact}>Support<Message /></button>
                    <button  onClick={InfoContact}>Call us<Message /></button>
                </div>
            </div>
            <HelpMessage {...{ ...modalHelp, setModalHelp }} />
         {/* </div> */}
                    </div>
    )
}

export default Help