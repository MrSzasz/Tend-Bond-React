const SlideMainCarousel = ({ img }) => {
  return (
    <div className="block w-full h-full min-h-min relative">
      <img className="object-contain" src={img} alt="" />
      <a href="https://www.stellamccartney.com" className="tbBtn absolute bottom-10 right-1/2 translate-x-1/2 z-50">Ver mas</a>
    </div>
  );
};

export default SlideMainCarousel;
