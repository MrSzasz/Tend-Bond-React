import $ from "jquery";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

const NavBar = () => {
  // const [classForNav, setClassForNav] = useState(
  //   "flex content-left items-center flex-col gap-2"
  //   // "flex w-fit content-evenly self-start pl-8 items-center gap-20"
  // );
  const showCart = () => {
    $("#blurCart").fadeToggle();
    $("#modalCartContainer").slideToggle();
  };

  const changeNav = () => {
    // alert('hola')

    $("#navContainer").toggleClass("tbTop");
    $("#navContainer").toggleClass("tbBottom");
  };

  $(window).scroll(function (event) {
    let scroll = $(window).scrollTop();
    if (scroll > 200) {
      $("#navContainer").removeClass("tbTop");
      $("#navContainer").addClass("tbBottom");
    } else if (scroll < 200) {
      $("#navContainer").removeClass("tbBottom");
      $("#navContainer").addClass("tbTop");
    }
  });

  return (
    <nav className="bg-white flex flex-col justify-center items-center gap-3 pb-2 sticky top-0 z-10 border-b-2 border-tbDarkGrey">
      <marquee className="bg-tbLightGrey" behavior="scroll" direction="left">
        ENVÍO GRATIS A PARTIR DE $5000
      </marquee>
      {/* <div className={classForNav}> */}
      <div id="navContainer" className="tbTop">
        <Link
          to="/"
          className="text-3xl relative text-center font-tbTitles font-bold tracking-wide w-full"
        >
          Trend Bond
        </Link>
        <div className="w-full">
          <ul className="flex gap-8 font-tbCaps">
            <li>
              <Link
                to="/"
                className="border-b transition-all duration-tbBase border-transparent hover:border-black"
              >
                INICIO
              </Link>
            </li>
            <li>
              <Link
                to="/products/deco"
                className="border-b transition-all duration-tbBase border-transparent hover:border-black"
              >
                DECORACIÓN
              </Link>
            </li>
            <li>
              <Link
                to="/products/accesorios"
                className="border-b transition-all duration-tbBase border-transparent hover:border-black"
              >
                ACCESORIOS
              </Link>
            </li>
            {/* <li>
              <Link
                to="/products"
                className="border-b transition-all duration-tbBase border-transparent hover:border-black"
              >
                NOSOTROS
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="absolute w-min right-0 flex items-center gap-2 m-4 cursor-pointer">
          <div className="cart" onClick={showCart}>
            <RiShoppingBagLine size={20} />
          </div>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
