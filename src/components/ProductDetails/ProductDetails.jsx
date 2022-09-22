import Gallery from "../Gallery/Gallery";
import { BsCircleFill } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import MainButton from "../MainButton/MainButton";

const ProductDetails = () => {
  return (
    <div className="w-[90%] m-auto h-fit grid grid-cols-2 gap-8 py-4">
      <div className="h-full flex items-center">
        <Gallery />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <div className="border-b border-tbMain">
            <h2 className="font-bold text-2xl">Pulsera Lucy</h2>
            <p className="text-tbDarkGrey">$1500</p>
          </div>
        </div>
        <div className="productInfo flex flex-col gap-4">
          <div>
            <h2 className="pb-2 text-sm">COLOR</h2>
            <div className="colorContainer flex gap-4 w-fit">
              <button>
                <BsCircleFill size={23} color="#006A7B" />
              </button>
              <button>
                <BsCircleFill size={23} color="#D9D9D9" />
              </button>
              <button>
                <BsCircleFill size={23} color="#AF8A63" />
              </button>
            </div>
          </div>
          <div>
            <h2 className="pb-2 text-sm">TALLE</h2>
            <div className="w-full flex gap-4">
              <button className="underline text-xs">S</button>
              <button className="text-xs text-tbDarkGrey">M</button>
              <button className="text-xs text-tbDarkGrey">L</button>
            </div>
          </div>
          <div>
            <p className="pb-2 text-sm">CANTIDAD</p>
            <div className="flex w-14 h-7 p-1 items-center rounded-full">
              <button>-</button>
              <input
                className="qtyInputOnCart w-full text-center text-sm h-min focus-visible:outline-none"
                type="number"
                name="qty"
                id="cartQty"
                defaultValue={1}
              />
              <button>+</button>
            </div>
          </div>
          <div className="desc">
            <h5 className="text-sm">DESCRIPCIÓN</h5>
            <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro in
            nobis repellat. Iure quisquam voluptatem nesciunt earum eum ex
            mollitia.</p>
          </div>
        </div>
        <MainButton link={'#'} text={"Agregar al carrito"} />
        <div className="flex flex-col gap-1">
          <button className="flex items-center gap-1 text-sm">
            CUIDADOS Y COMPOSICIÓN <AiOutlineDown size={13} />
          </button>
          <button className="flex items-center gap-1 text-sm">
            POLÍTICA DE DEVOLUCIÓN <AiOutlineDown size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
