import MainButton from "../MainButton/MainButton";

const MainSections = ({title, text, link, img}) => {
  return (
    <div className="flex flex-col-reverse text-justify md:text-left md:grid md:grid-cols-2 p-4 md:pl-[5%] py-2">
      <div className="w-full md:w-1/3 flex flex-col justify-end gap-1 pb-20">
        <h2 className="text-xl font-bold text-center md:text-left">{title}</h2>
        <p className="text-sm">
          {text}
        </p>
        <MainButton link={link} />
      </div>
      <img className="bg-blue-600 w-full h-[70vh] object-cover" src={img} alt="" referrerpolicy="no-referrer"/>
    </div>
  );
};

export default MainSections;
