const MainSections = ({title, text, link, img}) => {
  return (
    <div className="grid grid-cols-2 pl-[5%] py-2">
      <div className="w-1/3 flex flex-col justify-end gap-1 pb-20">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm">
          {text}
        </p>
        <a href={link} className="tbBtn mt-3">Ver mas</a>
      </div>
      <img className="bg-blue-600 w-full h-[70vh]" src={img} alt="" />
    </div>
  );
};

export default MainSections;
