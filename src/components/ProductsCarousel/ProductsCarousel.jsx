import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/css/effect-fade";
import "./ProductsCarousel.scss";
import ProductCard from "../ProductCard/ProductCard";

const ProductsCarousel = ({ title }) => {
  return (
    <div className="w-[90%] m-auto">
      <h1 className="tbMainTitles">{title}</h1>
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        autoHeight={true}
        navigation={true}
        breakpoints={{
          500: {
            slidesPerView: 2,
          },
          700: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 5,
          },
        }}
        autoplay={true}
        loop={true}
        spaceBetween={15}
        className="mySwiper newArrivalsSwiper"
      >
        <SwiperSlide className="flex flex-col">
          <ProductCard
            img={"http://placeimg.com/250/390/nature"}
            title={"title"}
            price={3500}
          />
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <ProductCard
            img={"http://placeimg.com/250/390/nature"}
            title={"title"}
            price={3500}
          />
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <ProductCard
            img={"http://placeimg.com/250/390/nature"}
            title={"title"}
            price={3500}
          />
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <ProductCard
            img={"http://placeimg.com/250/390/nature"}
            title={"title"}
            price={3500}
          />
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <ProductCard
            img={"http://placeimg.com/250/390/nature"}
            title={"title"}
            price={3500}
          />
        </SwiperSlide>

        <SwiperSlide className="flex flex-col">
          <ProductCard
            img={"http://placeimg.com/250/390/nature"}
            title={"title"}
            price={3500}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductsCarousel;
