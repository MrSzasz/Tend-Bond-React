import "./CartProduct.scss";
import QtyCounter from "../QtyCounter/QtyCounter";

import { BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../features/cart/cartSlice";
import { useState, useEffect } from "react";

const CartProduct = ({ img, id, name, size, color, qty, price }) => {
  const [priceFromQty, setPriceFromQty] = useState();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteFromCart(id));
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
          <QtyCounter initialValue={qty} />
        </div>
      </div>
      <span className="absolute text-sm text-tbMain bottom-1 right-1">
        ${priceFromQty}
      </span>
    </div>
  );
};

export default CartProduct;
