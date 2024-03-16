import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation ,Autoplay} from "swiper/modules";

import SliderNavigationButton from "./SliderNavigationButton";






function RoadmapCards() {


  return (
    <section className="px-6">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="py-5 [&_.swiper-slide]:!h-auto"
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: "#nextEl",
          prevEl: "#prevEl",
        }}
        
      >
      
          <SwiperSlide >
          <img src="images/suchicat1.jpeg" alt="" className=" rounded-xl border-black border" />
            
          </SwiperSlide>

          <SwiperSlide >
          <img src="images/suchicat3.jpeg" alt="" className=" rounded-xl border-black border m-4" />
            
          </SwiperSlide>

          <SwiperSlide >
          <img src="images/suchicat4.jpeg" alt="" className=" rounded-xl border-black border m-4" />
            
          </SwiperSlide>

          <SwiperSlide >
          <img src="images/suchicat5.jpeg" alt="" className=" rounded-xl border-black border m-4" />
            
          </SwiperSlide>

          <SwiperSlide >
          <img src="images/suchicat6.jpeg" alt="" className=" rounded-xl border-black border m-4" />
            
          </SwiperSlide>

          <SwiperSlide >
          <img src="images/suchicat7.jpeg" alt="" className=" rounded-xl border-black border m-4" />
            
          </SwiperSlide>
   
      </Swiper>

      <div className="flex items-center space-x-5 justify-center">
        <SliderNavigationButton id="prevEl" className="rotate-180" />
        <SliderNavigationButton id="nextEl" />
      </div>
    </section>
  );
}

export default RoadmapCards;
