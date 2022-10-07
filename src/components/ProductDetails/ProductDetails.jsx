import Gallery from "../Gallery/Gallery";
import MainButton from "../MainButton/MainButton";
import ProductColors from "../ProductColors/ProductColors";
import ProductSizes from "../ProductSizes/ProductSizes";
import QtyCounter from "../QtyCounter/QtyCounter";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log('hola');
    const product = {
      id,
      name, 
      qty, 
      price, 
      
    }
    // dispatch(addToCart(product));
  }

  return (
    <div className="w-[90%] m-auto h-fit flex flex-col md:grid md:grid-cols-2 gap-8 py-4">
      <div className="h-full flex items-center">
        <Gallery />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <div className="border-b border-tbMain">
            <h2 className="font-bold text-2xl">{product.name}</h2>
            <p className="text-tbDarkGrey">$1500</p>
          </div>
        </div>
        <div className="productInfo flex flex-col gap-4">
          {product.colors.length !== 0 && <ProductColors product={product} />}
          {product.sizes.length !== 0 && <ProductSizes product={product} />}
          <div>
            <p className="pb-2 text-sm">CANTIDAD</p>
            <QtyCounter />
          </div>
          <div className="desc">
            <h5 className="text-sm">DESCRIPCIÓN</h5>
            <p className="text-xs pt-3">{product.description}</p>
          </div>
        </div>
        <MainButton fn={handleAddToCart} text={"Agregar al carrito"} />
        <div className="flex flex-col gap-3">
          <details className="cursor-pointer">
            <summary className="text-sm">POLÍTICA DE DEVOLUCIÓN</summary>
            <p className="cursor-default text-xs">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro in
              nobis repellat. Iure quisquam voluptatem nesciunt earum eum ex
              mollitia.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
