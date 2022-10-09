import "./CartProduct.scss";
import QtyCounter from "../QtyCounter/QtyCounter";

import { BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../features/cart/cartSlice";
import { useState, useEffect } from "react";

const CartProduct = ({ img, id, name, size, color, qty, price }) => {
  const [priceFromQty, setPriceFromQty] = useState();
  const dispatch = useDispatch();

  const cartInRedux = useSelector((state)=> state.cartSlice)
  const handleDelete = () => {
    dispatch(deleteFromCart(id))
    // console.log(store.getState());
  };

  useEffect(() => {
    setPriceFromQty(price * qty);
  }, [priceFromQty]);

  return (
    <div className="cartProduct w-full flex relative border-b border-tbDarkGrey scroll-smooth">
      <button onClick={handleDelete} className="absolute top-2 right-1">
        <BiTrash size={15} />
      </button>
      <img
        className="w-[100px] h-[120px] object-contain m-4"
        src={img}
        alt={`Imagen ${name}`}
      />
      <div>
        <div className="w-full flex flex-col content-between h-fit py-2 pr-5">
          <h3 className="text-xs font-bold">{name}</h3>
          <p className="text-xs text-tbDarkGrey">Talle: {size}</p>
          <p className="text-xs text-tbDarkGrey">Color: {color}</p>
          <p className="text-xs text-tbDarkGrey">Cantidad: {qty}</p>
        </div>
        <>
          {/* <QtyCounter initialValue={qty} /> */}
        </>
      </div>
      <span className="absolute text-sm text-tbMain bottom-1 right-1">
        ${priceFromQty}
      </span>
    </div>
  );
};

export default CartProduct;

