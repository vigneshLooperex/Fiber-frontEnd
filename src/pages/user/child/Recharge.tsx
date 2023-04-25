import AuthLoader from '@/components/AuthLoader';
import { getItem, RechargePlans } from '@/global/data';
import { useGetPlansQuery, useRechargeMutation } from '@/redux/service/userApi';
import { Menu, MenuProps, Layout, Button, message } from 'antd'
import postpaid from '../../../assets/images/recharge.jpg'
import PlanSwiper from '@/components/PlanSwiper';

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const Recharge = () => {
    const {data, isLoading:planLoading} = useGetPlansQuery({})
    const [recharge, {isLoading}] = useRechargeMutation()

    
    // console.log(data)

    const items: MenuItem[] = data?.plans.map((item:any, i:any) => getItem(`${item.name} Pack`, i));

    async function handleRecharge(id:any) {

        const payload = { planId: id }
        // console.log(id)

        try{
            const res = await recharge(payload).unwrap()
            if(res.success === true)  {
                message.open({
                    type: 'success',
                    content: res.message,
                })    
                window.location.replace(res.url)
            } 
            else message.open({
                type: 'error',
                content:'Something went wrong',
            })
        } catch(err) {
            console.log(err)
            message.open({
                type: 'error',
                content: 'Something went wrong',
            })
        }
    }



    return (
        
        <div className="dashboard-recharge-plan-list">
            <div style={{ marginLeft: 30 }}>
                <h2>Recharge</h2>
            </div>
            <div className='dashboard-main-banner'>
                <div className="dashboard-banner">
                    <img src={postpaid}/>
                    <div className='banner-content'>
                        <div>Now enjoy our best plan like never before</div>
                    </div>
                </div>
            </div>
            <div className="slider-view">
                {planLoading ? 
                <AuthLoader/> :
                <PlanSwiper {...{data, handleRecharge, isLoading}}/>
                }
            </div>
        </div>
    )
}

export default Recharge