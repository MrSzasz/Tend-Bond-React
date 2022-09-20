const Cart = () => {
  return (
    <div className="bg-tbBackDrop w-screen h-screen fixed top-0 right-0 z-10 hidden">
      <div className="bg-white w-1/4 h-screen fixed right-0 top-0 z-[55] flex flex-col items-center justify-between">
        <h2>cart</h2>
        <div className="grid grid-cols-2 grid-rows-2 h-min">
          <img className="w-[100px] h-[120px] row-start-1" src="" alt="" />
          <div className="w-full">
            <h3>producto</h3>
            <p>talle</p>
            <p>color</p>
          </div>
          <p className="w-full h-min col-span-2">total</p>
        </div>
        <div>
          <button className="tbBtn">pedir por Whatsapp</button>
          <a href="">cerrar</a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
