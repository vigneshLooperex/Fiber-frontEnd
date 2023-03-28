import FaceBook from '@/assets/svg/FaceBook'
import InLiked from '@/assets/svg/Inlinked'
import Twitter from '@/assets/svg/Twitter'
import { aboutus, offer } from '@/global/data'
import React from 'react'

type Props = {}

function Footer() {
    return (
        <footer>
            <div className="foot">

                <div className="pages">
                    <div className='footer-links'>
                        <h3>Our offers</h3>
                        <div className='offer'>
                            {offer.map((item, i) => <a key={i}>{item.name}</a>)}
                        </div>
                    </div>
                    <div className='footer-links'>
                        <h3>About</h3>
                        <div className='offer'>
                            {aboutus.map((item, i) => <a key={i}>{item.name}</a>)}
                        </div>
                    </div>
                </div>
                <div className="connect">
                    <h3>Connect with us</h3>
                    <div className='social-icons'>
                        <FaceBook />
                        <Twitter />
                        <InLiked />
                    </div>
                </div>
            </div>
            <div className="copyWrites">
                <h4>Logo Copyright ©{new Date().getFullYear()} Company name. All rights reserved.</h4>
                {/* <div></div> */}
            </div>
        </footer>
    )
}

export default Footer