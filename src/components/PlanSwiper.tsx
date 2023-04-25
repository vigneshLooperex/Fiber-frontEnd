import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Button } from "antd";

function PlanSwiper({data, handleRecharge, isLoading}: any) {
  return (
    // <>
    <Swiper
    slidesPerView={3}
    spaceBetween={30}
    autoplay={{
      delay: 1500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }}
    grabCursor={true}
    breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
    {data?.plans?.map((_item:any, i:number) => {
        return (
            <SwiperSlide className='top-plans' key={i} id={i.toString()}>
                <p>Best selling </p>
                <div className='rupess'>₹ {_item.amount}</div>
                <hr color='#525360'  />
                <div className="data">
                    <div className="pack">
                        Data speed<br /><span>{_item.networkSpeed} MB</span>
                    </div>
                    <div className="pack">
                        Validity<br /><span>{_item.validity} Days</span>
                    </div>
                </div>
                <div className="recharge-button">
                    <Button type="primary" onClick={() => handleRecharge(_item._id)}>Recharge</Button>
                </div>
            </SwiperSlide>
        )
    })}
  </Swiper>
    // </>
  )
}

export default PlanSwiper