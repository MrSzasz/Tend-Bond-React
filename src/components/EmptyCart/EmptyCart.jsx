import { CgShoppingCart } from "react-icons/cg";

const EmptyCart = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 my-auto">
      <CgShoppingCart size={70} color={"#F48F4A"} />
      <h1 className="font-bold text-xl text-center">
        ¡Oh no!
        <br /> El carrito esta vacío
      </h1>
    </div>
  );
};

export default EmptyCart;
