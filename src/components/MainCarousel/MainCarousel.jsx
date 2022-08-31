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
      className="mySwiper"
    >
      <SwiperSlide>
        <SlideMainCarousel img="https://picsum.photos/500/300?random=1"/>
      </SwiperSlide>
      <SwiperSlide>
        <SlideMainCarousel img="https://picsum.photos/500/300?random=2"/>
      </SwiperSlide>
      <SwiperSlide>
        <SlideMainCarousel img="https://picsum.photos/500/300?random=3"/>
      </SwiperSlide>
      <SwiperSlide>
        <SlideMainCarousel img="https://picsum.photos/500/300?random=4"/>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainCarousel;
