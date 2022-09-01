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
        autoplay={true}
        loop={true}
        slidesPerView={5}
        spaceBetween={15}
        className="mySwiper newArrivalsSwiper"
      >
        <SwiperSlide className="flex flex-col">
          <NewArrivalsCard img={"http://placeimg.com/250/390/nature"} title={"title"} price={3500}/>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <NewArrivalsCard img={"http://placeimg.com/250/390/nature"} title={"title"} price={3500}/>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <NewArrivalsCard img={"http://placeimg.com/250/390/nature"} title={"title"} price={3500}/>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <NewArrivalsCard img={"http://placeimg.com/250/390/nature"} title={"title"} price={3500}/>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <NewArrivalsCard img={"http://placeimg.com/250/390/nature"} title={"title"} price={3500}/>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <NewArrivalsCard img={"http://placeimg.com/250/390/nature"} title={"title"} price={3500}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
