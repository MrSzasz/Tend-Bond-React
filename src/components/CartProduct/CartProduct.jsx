// import "./CartProduct.scss";
// import QtyCounter from "../QtyCounter/QtyCounter"

// import { BiTrash } from "react-icons/bi";

// const CartProduct = ({img, name, size, color, qty, price}) => {
// return (
//   <div className="cartProduct w-full flex relative border-b border-tbDarkGrey scroll-smooth">
//     <button className="absolute top-2 right-1">
//       <BiTrash size={15} />
//     </button>
//     <img
//       className="w-[100px] h-[120px] object-contain"
//       src="https://images.squarespace-cdn.com/content/v1/55c8073fe4b02a74ffe18e48/1439943938495-DG82TIFV14PAJGBMEMVW/255a46afa1aa2854dffeb7694e7e7952-d46mpw3+%281%29.png?format=1500w"
//       alt=""
//     />
//     <div>
//       <div className="w-full flex flex-col content-between h-fit py-2">
//         <h3 className="text-xs font-bold">PULSERA LUCY</h3>
//         <p className="text-xs text-tbDarkGrey">Talle: S</p>
//         <p className="text-xs text-tbDarkGrey">Color: Dorado</p>
//       </div>
//       <div>
//         <p className="text-xs text-tbDarkGrey">Cantidad</p>
//         <QtyCounter />
//       </div>
//     </div>
//     <span className="absolute text-sm text-tbMain bottom-1 right-1">
//       $1500
//     </span>
//   </div>
// );

// export default CartProduct;
import "./CartProduct.scss";
import QtyCounter from "../QtyCounter/QtyCounter";

import { BiTrash } from "react-icons/bi";

const CartProduct = ({ img, name, size, color, qty, price }) => {
  return (
    <div className="cartProduct w-full flex relative border-b border-tbDarkGrey scroll-smooth">
      <button className="absolute top-2 right-1">
        <BiTrash size={15} />
      </button>
      <img
        className="w-[100px] h-[120px] object-contain"
        src={img}
        alt={`Imagen ${name}`}
      />
      <div>
        <div className="w-full flex flex-col content-between h-fit py-2">
          <h3 className="text-xs font-bold">{name}</h3>
          <p className="text-xs text-tbDarkGrey">Talle: {size}</p>
          <p className="text-xs text-tbDarkGrey">Color: {color}</p>
        </div>
        <div>
          <p className="text-xs text-tbDarkGrey">Cantidad</p>
          <QtyCounter />
        </div>
      </div>
      <span className="absolute text-sm text-tbMain bottom-1 right-1">
        ${price}
      </span>
    </div>
  );
};

export default CartProduct;
