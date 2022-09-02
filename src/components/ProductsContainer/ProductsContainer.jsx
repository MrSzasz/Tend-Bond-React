import NewArrivalsCard from "../NewArrivalsCard/NewArrivalsCard";
import { AiOutlineLeft, AiOutlineDown } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import { Link } from "react-router-dom";

const ProductsContainer = () => {
  let products = [
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "/products",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "/products",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "/products",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "/products",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "/products",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "/products",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "/products",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "/products",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "/products",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "/products",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "/products",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "/products",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "/products",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "/products",
    },
    {
      name: "producto",
      price: 2500,
      img: "http://placeimg.com/250/390/nature",
      link: "/products",
    },
  ];

  return (
    <div className="w-[90%] m-auto flex flex-col pb-6">
      <Link to="/" className="w-full flex items-center gap-2 pb-8">
        <AiOutlineLeft />
        <p>
          <span className="text-gray-500 border-b transition-all duration-tbBase border-transparent hover:border-black" >HOME</span> | NUEVO
        </p>
      </Link>
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
