import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-fade";
import "./Carousel.scss";
import NewArrivalsCard from "../NewArrivalsCard/NewArrivalsCard";

const Carousel = () => {
  return (
    <div className="w-[90%] m-auto">
      <h1 className="text-xl font-bold py-2">New arrivals</h1>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        autoHeight={true}
        navigation={true}
        loop={true}
        slidesPerView={5}
        spaceBetween={25}
        className="mySwiper newArrivalsSwiper"
      >
        <SwiperSlide className="flex flex-col">
          <NewArrivalsCard/>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <NewArrivalsCard/>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <NewArrivalsCard/>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <NewArrivalsCard/>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <NewArrivalsCard/>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <NewArrivalsCard/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
