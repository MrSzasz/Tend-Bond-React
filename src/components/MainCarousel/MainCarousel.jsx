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
        <SlideMainCarousel img="https://i.imgur.com/EWUxkQY.jpg" link={"products/deco"}/>
      </SwiperSlide>
      <SwiperSlide className="mainSwiperSlide">
        <SlideMainCarousel img="https://i.imgur.com/3euHQc4.jpg" link={"products/deco"}/>
      </SwiperSlide>
      {/* <SwiperSlide className="mainSwiperSlide">
        <SlideMainCarousel img="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQI6l0AgxfPSyTF4qum4019sQ9Y1txjpVH5RekuJjQH6Gwr2oHiOlJ_nFH81RzYoqxxh6fORDvP_Vg1odIj3Wbp8JlxHvIAB_7sJUF8lrR6ff1sfJH5-jQEuw&usqp=CAE" link={"products/accesorios"}/>
      </SwiperSlide> */}
      {/* <SwiperSlide className="mainSwiperSlide">
        <SlideMainCarousel img="http://placeimg.com/500/500/people"/>
      </SwiperSlide> */}
    </Swiper>
  );
};

export default MainCarousel;
