import { helpMethod } from '@/global/data'
import HelpMessage from '@/modal/HelpMessage'
import { HelpModalState } from '@/types/global'
import React, { useState } from 'react'

const Help = () => {
    const [modalHelp, setModalHelp] = useState<HelpModalState>({ open: false, serviceType: '' })

    return (
        <div className='recharge-screen'>
            <div className="rechargeHead">
                <h2>How can we help you ?</h2>
            </div>
            <div className='help-issue'>
                {helpMethod.map((item, i) => {
                    return (
                        <a className='help-box' onClick={() => setModalHelp({
                            open: true,
                            serviceType: item.title
                        })}>
                            <i>
                                <item.icon />
                            </i>
                            <p>
                                {item.title}
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