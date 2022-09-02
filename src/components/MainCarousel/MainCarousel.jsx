import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-fade";
import "./MainCarousel.scss";
import SlideMainCarousel from "../SlideMainCarousel/SlideMainCarousel";

const MainCarousel = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay, EffectFade]}
      pagination={{
        type: "progressbar",
      }}
      autoHeight={true}
      effect="fade"
      loop={true}
      autoplay={true}
      className="mySwiper"
    >
      <SwiperSlide className="mainSwiperSlide">
        <SlideMainCarousel img="http://placeimg.com/500/500/nature"/>
      </SwiperSlide>
      <SwiperSlide className="mainSwiperSlide">
        <SlideMainCarousel img="http://placeimg.com/500/500/architecture"/>
      </SwiperSlide>
      <SwiperSlide className="mainSwiperSlide">
        <SlideMainCarousel img="http://placeimg.com/500/500/animals"/>
      </SwiperSlide>
      <SwiperSlide className="mainSwiperSlide">
        <SlideMainCarousel img="http://placeimg.com/500/500/people"/>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainCarousel;
