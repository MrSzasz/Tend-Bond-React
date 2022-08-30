import "./NavBar.scss";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const NavBar = () => {
  return (
    <nav className="bg-white flex flex-col justify-center items-center gap-3 pb-2">
      <marquee className="bg-tbMain" behavior="scroll" direction="left">
        ENVIO GRATIS A PARTIR DE $5000
      </marquee>
      <div className="flex content-center items-center w-full">
        <div className="text-3xl relative text-center w-full font-tbTitles font-bold tracking-wide">Trend Bond</div>
        <div className="absolute w-min right-0 flex gap-2 m-4">
          <div className="cart">
            <RiShoppingBagLine size={20} />
          </div>
          <div className="favorites">
            <AiOutlineHeart size={20} />
          </div>
          <div className="searchBar">
            <FiSearch size={20} />
          </div>
        </div>
      </div>
      <div className="bar">
        <ul className="flex gap-8 font-tbCaps">
          <li>
            <a
              className="border-b transition-all duration-tbBase border-transparent hover:border-black"
              href="#"
            >
              NUEVO
            </a>
          </li>
          <li>
            <a
              className="border-b transition-all duration-tbBase border-transparent hover:border-black"
              href="#"
            >
              COLECCIÓN
            </a>
          </li>
          <li>
            <a
              className="border-b transition-all duration-tbBase border-transparent hover:border-black"
              href="#"
            >
              REBAJAS
            </a>
          </li>
          <li>
            <a
              className="border-b transition-all duration-tbBase border-transparent hover:border-black"
              href="#"
            >
              NOSOTROS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
