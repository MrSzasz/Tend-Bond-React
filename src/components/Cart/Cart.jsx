import MainButton from '../MainButton/MainButton';
import './Cart.scss'
import CartProduct from "../CartProduct/CartProduct";

const Cart = () => {
  return (
    <div className="bg-tbBackDrop w-screen h-screen fixed top-0 right-0 z-10 ">
      <div className="bg-white w-1/4 h-screen fixed right-0 top-0 z-[55] flex flex-col p-4 justify-between">
        <h2 className='text-sm font-bold'>CARRITO</h2>
        <div className="cartProductsContainer flex flex-col h-4/5">
          <CartProduct/>
          <CartProduct/>
          <CartProduct/>
          <CartProduct/>
          <CartProduct/>
        </div>
        <div className='flex flex-col gap-2'>
          {/* <button className="tbBtn">Pedir por Whatsapp</button> */}
          <MainButton link={'#'} text={"Pedir por Whatsapp"}/>
          <button className='text-tbMain text-sm'>Seguir comprando</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
