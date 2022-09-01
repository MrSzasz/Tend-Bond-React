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
      navigation={true}
      effect="fade"
      loop={true}
      autoplay={true}
      className="mySwiper"
    >
      <SwiperSlide className="mainSwiperSlide">
        <SlideMainCarousel img="http://placeimg.com/500/200/nature"/>
      </SwiperSlide>
      <SwiperSlide className="mainSwiperSlide">
        <SlideMainCarousel img="http://placeimg.com/500/200/architecture"/>
      </SwiperSlide>
      <SwiperSlide className="mainSwiperSlide">
        <SlideMainCarousel img="http://placeimg.com/500/200/animals"/>
      </SwiperSlide>
      <SwiperSlide className="mainSwiperSlide">
        <SlideMainCarousel img="http://placeimg.com/500/200/people"/>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainCarousel;
