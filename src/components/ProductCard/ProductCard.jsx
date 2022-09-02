import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductCard = ({ img, title, price }) => {
  return (
    <div className="relative min-h-min h-min">
      <AiOutlineHeart className="absolute top-1 right-1" />
      <div className="relative min-h-min min-w-min group overflow-hidden cursor-pointer">
        <img className="object-cover min-w-full" src={img} alt="" />
        <Link to="/products/detalle" className="flex justify-center items-center transition-all duration-500 group-hover:top-0 group-hover:visible invisible h-full overflow-hidden bg-tbMain w-full py-2 absolute top-full right-0 font-bold text-white text-2xl opacity-90">
          Ver más
        </Link>
      </div>
      <figcaption className="flex flex-col place-content-start w-full">
        <p className="w-max text-sm">{title}</p>
        <p className="w-min text-tbMain text-sm">{price}</p>
      </figcaption>
    </div>
  );
};

export default ProductCard;
