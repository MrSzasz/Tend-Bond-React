const SlideMainCarousel = ({ img }) => {
  return (
    <div className="block w-full h-full relative">
      <img className="object-cover" src={img} alt="" />
      <a className="bg-tbMain rounded-lg pt-2 absolute bottom-2 right-1/2">Ver mas</a>
    </div>
  );
};

export default SlideMainCarousel;
