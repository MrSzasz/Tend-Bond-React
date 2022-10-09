import MainButton from "../MainButton/MainButton";
import "./Cart.scss";
import CartProduct from "../CartProduct/CartProduct";
import EmptyCart from "../EmptyCart/EmptyCart";
import { useState } from "react";
import { useSelector } from "react-redux";
import cartSlice from "../../features/cart/cartSlice";
import { useEffect } from "react";

const Cart = ({ showCart }) => {
  const [cartFromState, setCartFromState] = useState([]);
  const cartArray = useSelector((state) => state.cartSlice);

  useEffect(() => {
    setCartFromState(cartArray);
  }, [cartArray]);

  return (
    <div
      id="blurCart"
      className="bg-tbBackDrop w-screen h-screen fixed top-0 right-0 z-10 hidden"
    >
      <div
        id="modalCartContainer"
        className="bg-white w-full sm:w-2/4 lg:w-2/4 xl:w-1/4 h-screen fixed right-0 top-0 z-[55] flex flex-col p-4 justify-between hidden"
      >
        <h2 className="text-sm font-bold">CARRITO</h2>
        <div className="cartProductsContainer flex flex-col h-4/5">
          {cartFromState.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              {cartFromState.map((product, i) => (
                <CartProduct
                  key={product.id}
                  id={product.id}
                  img={product.img.original}
                  name={product.name}
                  size={product.size}
                  color={product.color}
                  qty={product.qty}
                  price={product.price}
                />
              ))}
            </>
          )}
        </div>
        <div className="flex flex-col gap-2">
          {cartFromState.length !== 0 && (
            <MainButton fn={handleBuy} link={"#"} text={"Pedir por Whatsapp"} />
          )}
          <button className="text-tbMain text-sm" onClick={showCart}>
            Seguir comprando
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
