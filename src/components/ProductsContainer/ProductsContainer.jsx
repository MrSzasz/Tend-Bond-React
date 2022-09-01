import NewArrivalsCard from "../NewArrivalsCard/NewArrivalsCard";
import { AiOutlineLeft, AiOutlineDown } from "react-icons/ai";
import { GoSettings } from "react-icons/go";

const ProductsContainer = () => {
  let products = [
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "https://i.pinimg.com/originals/4f/a3/78/4fa3782e5d7c9276d00819a65a0cc83c.jpg",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "https://i.pinimg.com/originals/4f/a3/78/4fa3782e5d7c9276d00819a65a0cc83c.jpg",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "https://i.pinimg.com/originals/4f/a3/78/4fa3782e5d7c9276d00819a65a0cc83c.jpg",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "https://i.pinimg.com/originals/4f/a3/78/4fa3782e5d7c9276d00819a65a0cc83c.jpg",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "https://i.pinimg.com/originals/4f/a3/78/4fa3782e5d7c9276d00819a65a0cc83c.jpg",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "https://i.pinimg.com/originals/4f/a3/78/4fa3782e5d7c9276d00819a65a0cc83c.jpg",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "https://i.pinimg.com/originals/4f/a3/78/4fa3782e5d7c9276d00819a65a0cc83c.jpg",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "https://i.pinimg.com/originals/4f/a3/78/4fa3782e5d7c9276d00819a65a0cc83c.jpg",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "https://i.pinimg.com/originals/4f/a3/78/4fa3782e5d7c9276d00819a65a0cc83c.jpg",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "https://i.pinimg.com/originals/4f/a3/78/4fa3782e5d7c9276d00819a65a0cc83c.jpg",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "https://i.pinimg.com/originals/4f/a3/78/4fa3782e5d7c9276d00819a65a0cc83c.jpg",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "https://i.pinimg.com/originals/4f/a3/78/4fa3782e5d7c9276d00819a65a0cc83c.jpg",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "https://i.pinimg.com/originals/4f/a3/78/4fa3782e5d7c9276d00819a65a0cc83c.jpg",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "https://i.pinimg.com/originals/4f/a3/78/4fa3782e5d7c9276d00819a65a0cc83c.jpg",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "https://i.pinimg.com/originals/4f/a3/78/4fa3782e5d7c9276d00819a65a0cc83c.jpg",
    },
  ];

  return (
    <div className="w-[90%] m-auto flex flex-col pb-6">
      <div className="w-full flex items-center gap-2 pb-8">
        <AiOutlineLeft />
        <p>
          <span>HOME</span> | NUEVO
        </p>
      </div>
      <div>
        <div className="flex items-center gap-1">
          <GoSettings className="rotate-90" />
          <button className="flex items-center gap-1">
            Filtros <AiOutlineDown size={13} />
          </button>
        </div>
        <h2 className="tbTitleStyles">New arrivals</h2>
        <div className="grid grid-cols-5 gap-3">
          {products.map((item) => (
            <NewArrivalsCard
              img={item.img}
              price={item.price}
              title={item.name}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
