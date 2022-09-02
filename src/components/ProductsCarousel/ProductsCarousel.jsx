import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-fade";
import "./ProductsCarousel.scss";
import ProductCard from "../ProductCard/ProductCard";

const ProductsCarousel = ({title}) => {
  return (
    <div className="w-[90%] m-auto">
      <h1 className="tbMainTitles">{title}</h1>
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
          <ProductCard img={"http://placeimg.com/250/390/nature"} title={"title"} price={3500}/>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <ProductCard img={"http://placeimg.com/250/390/nature"} title={"title"} price={3500}/>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <ProductCard img={"http://placeimg.com/250/390/nature"} title={"title"} price={3500}/>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <ProductCard img={"http://placeimg.com/250/390/nature"} title={"title"} price={3500}/>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <ProductCard img={"http://placeimg.com/250/390/nature"} title={"title"} price={3500}/>
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <ProductCard img={"http://placeimg.com/250/390/nature"} title={"title"} price={3500}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductsCarousel;
