// import "./NavBar.scss";
// import { RiShoppingBagLine } from "react-icons/ri";
// import { Link } from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";

// const NavBar = () => {
//   return (
//     <nav className="bg-white flex flex-col justify-center items-center gap-3 pb-2">
//       <marquee className="bg-tbLightGrey" behavior="scroll" direction="left">
//         ENVÍO GRATIS A PARTIR DE $5000
//       </marquee>
//       <div className="flex content-center items-center w-full">
//         <Link
//           to="/"
//           className="text-3xl relative text-center w-full font-tbTitles font-bold tracking-wide"
//         >
//           Trend Bond
//         </Link>
//         <div className="absolute w-min right-0 flex gap-2 m-4">
//           <div className="cart">
//             <RiShoppingBagLine size={20} />
//           </div>
//           <SearchBar />
//         </div>
//       </div>
//       <div className="bar">
//         <ul className="flex gap-8 font-tbCaps">
//           <li>
//             <Link
//               to="/"
//               className="border-b transition-all duration-tbBase border-transparent hover:border-black"
//               href="#"
//             >
//               INICIO
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/products"
//               className="border-b transition-all duration-tbBase border-transparent hover:border-black"
//               href="#"
//             >
//               DECORACIÓN
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/products"
//               className="border-b transition-all duration-tbBase border-transparent hover:border-black"
//               href="#"
//             >
//               ACCESORIOS
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/products"
//               className="border-b transition-all duration-tbBase border-transparent hover:border-black"
//               href="#"
//             >
//               NOSOTROS
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;









import "./NavBar.scss";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <nav className="bg-white flex flex-col justify-center items-center gap-3 pb-2">
      <marquee className="bg-tbLightGrey" behavior="scroll" direction="left">
        ENVÍO GRATIS A PARTIR DE $5000
      </marquee>
      <div className="flex content-left items-center w-full">
        <Link
          to="/"
          className="text-3xl relative text-center w-full font-tbTitles font-bold tracking-wide"
        >
          Trend Bond
        </Link>
        <div className="bar">
        <ul className="flex gap-8 font-tbCaps">
          <li>
            <Link
              to="/"
              className="border-b transition-all duration-tbBase border-transparent hover:border-black"
              href="#"
            >
              INICIO
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="border-b transition-all duration-tbBase border-transparent hover:border-black"
              href="#"
            >
              DECORACIÓN
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="border-b transition-all duration-tbBase border-transparent hover:border-black"
              href="#"
            >
              ACCESORIOS
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="border-b transition-all duration-tbBase border-transparent hover:border-black"
              href="#"
            >
              NOSOTROS
            </Link>
          </li>
        </ul>
      </div>
        <div className="absolute w-min right-0 flex gap-2 m-4">
          <div className="cart">
            <RiShoppingBagLine size={20} />
          </div>
          <SearchBar />
        </div>
      </div>

    </nav>
  );
};

export default NavBar;
