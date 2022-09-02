import { Link } from "react-router-dom";

const SlideMainCarousel = ({ img }) => {
  return (
    <div className="block w-full min-h-min max-h-[80vh] relative">
      <img className="object-center" src={img} alt="" />
      <Link to="/products" className="tbBtn absolute bottom-10 right-1/2 translate-x-1/2 z-50">Ver mas</Link>
    </div>
  );
};

export default SlideMainCarousel;