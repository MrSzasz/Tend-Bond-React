import { AiOutlineHeart } from "react-icons/ai";

const NewArrivalsCard = () => {
  return (
    <div className="relative">
      <AiOutlineHeart className="absolute top-1 right-1" />
      <img src="https://picsum.photos/250/390?random=1" alt="" />
      <figcaption className="flex flex-col place-content-start w-full">
        <p className="w-max text-sm">Camisa Lucy</p>
        <p className="w-min text-tbMain text-sm">$666</p>
      </figcaption>
    </div>
  );
};

export default NewArrivalsCard;
