import Header from '@/components/Header'
import { plans } from '@/global/data'
import SmallCircle from '@/assets/svg/SmallCircle'
import BigCircle from '@/assets/svg/BigCircle'
import { Button } from 'antd'
import Message from '@/assets/svg/Message'
import Footer from '@/components/Footer'

interface Plans {
    amount: string,
    validity: string
}

function Index() {
    return (
        <>
            <Header />
            <div className='AuthBackground' id='home'>
                <div className="main">
                    <div className="mainQuato">
                        <h1>Superfast internet is here<br />
                            Signup today</h1>
                        <p>Enjoy the unlimited data experience with<br />
                            the fastest broadband network</p>
                        <button>Check Our Plan</button>
                        <h1>Top Selling Plans</h1>
                    </div>
                    <div>
                        <img src='https://thenistorage.s3.ap-south-1.amazonaws.com/uploads/1679480291337-3d-casual-life-young-women-working-with-computer' />
                    </div>
                </div>
                <div className='plans' id='plans'>
                    <div className='listCenter'>
                        {plans.map((_item, i) => {
                            return (
                                <div className='top-plans' key={i} id={i.toString()}>
                                    <p>Best selling </p>
                                    <div className='rupess'>{_item.amount}</div>
                                    <hr color='#525360' style={{ width: '180px' }} />
                                    <div className="data">
                                        <div className="pack">
                                            Data<br /><span>Unlimited</span>
                                        </div>
                                        <div className="pack">
                                            Validity<br /><span>{_item.validity}</span>
                                        </div>
                                    </div>
                                    <div className="recharge-button">
                                        <button>Recharge</button>
                                        <a href="#">All Plans</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="banner">
                    <BigCircle className='bigCircle' />
                    <div className="bannerBackgrount" >
                        <p>Easily recharge or <br /> Pay bill online </p>
                        <img src='https://thenistorage.s3.ap-south-1.amazonaws.com/uploads/1679551483351-3d-casual-life-young-man-shopping-online' />
                    </div>
                    <SmallCircle className='smallCircle' />
                </div>
                <div className="guide" id='contact'>
                    <p className="guideText">
                        Need guidance?
                    </p>
                    <div className="guideButton">
                        <button>Support<Message /></button>
                        <button>Call us<Message /></button>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Index