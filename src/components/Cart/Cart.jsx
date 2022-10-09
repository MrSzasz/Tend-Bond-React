import MainButton from "../MainButton/MainButton";
import "./Cart.scss";
import CartProduct from "../CartProduct/CartProduct";
import EmptyCart from "../EmptyCart/EmptyCart";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartSlice, { buyCart } from "../../features/cart/cartSlice";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const Cart = ({ showCart }) => {
  const [cartFromState, setCartFromState] = useState([]);
  const cartArray = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  const notify = () =>
    toast.success("¡Perfecto! Será redireccionado en unos segundos...", {
      id: "buyToast",
    });

  useEffect(() => {
    setCartFromState(cartArray);
  }, [cartArray]);

  const total = cartArray.reduce(
    (accumulator, item) => (accumulator += item.price * item.qty),
    0
  );

  const createWspMsg = () => {
    const start =
      "https://api.whatsapp.com/send/?phone=543855037253&text=Orden+de+compra+🛍%0A%0A";

    const end = `%0ATotal%3A+$${total} +💸&type=phone_number&app_absent=0`;

    const concatFn = (array) => {
      return array
        .map((item) => {
          return `🔸+${item.qty}+x+${item.name.replace(" ", "+")}+-+${
            item.color
          }${item.size != undefined ? `+-+${item.size}` : ""}%0A`;
        })
        .join("");
    };

    let msg = start + concatFn(cartArray) + end;
    setTimeout(() => {
      window.location.href = msg;
    }, 3000);
  };


  const handleBuy = () => {
    createWspMsg();
    notify();
    // dispatch(buyCart());
  };

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
        <div className="cartProductsContainer flex flex-col max-h-[75vh] h-fit overflow-y-scroll">
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
        <div className="flex flex-col h-fit">
          {total != 0 && (
            <p className="text-center w-full pt-2">
              Total: <span className="text-tbMain">${total}</span>
            </p>
          )}
          {cartFromState.length !== 0 && (
            <MainButton fn={handleBuy} link={"#"} text={"Pedir por Whatsapp"} />
          )}
          <button className="text-tbMain text-sm pt-2" onClick={showCart}>
            Seguir comprando
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
