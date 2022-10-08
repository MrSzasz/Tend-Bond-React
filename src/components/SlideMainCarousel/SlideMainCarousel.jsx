import { Link } from "react-router-dom";

const SlideMainCarousel = ({ img, link }) => {
  return (
    <div className="block w-full min-h-min h-fit max-h-[80vh] relative">
      <img className="object-bottom" src={img} alt="" referrerPolicy="no-referrer"/>
      <Link to={link} className="tbBtn absolute bottom-10 right-1/2 translate-x-1/2 z-50">Ver mas</Link>
    </div>
  );
};

export default SlideMainCarousel;