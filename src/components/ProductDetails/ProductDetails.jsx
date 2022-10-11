import $ from "jquery";
import Gallery from "../Gallery/Gallery";
import ProductColors from "../ProductColors/ProductColors";
import ProductSizes from "../ProductSizes/ProductSizes";
import QtyCounter from "../QtyCounter/QtyCounter";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const ProductDetails = ({ product, photos }) => {
  const dispatch = useDispatch();

  const addToCartToast = () =>
    toast("¡Producto agregado correctamente!", {
      id: "addToCartToast",
    });

  const handleAddToCart = (id, img, name, price) => {
    addToCartToast();
    const productForCart = {
      id,
      img,
      name,
      color: $("input[type=radio][name=colorSelect]:checked").val(),
      size: $("select[name=sizesSelect]").val(),
      qty: Number($(".qtyInputOnCart").html()),
      price: price,
    };
    dispatch(addToCart(productForCart));
  };

  return (
    <div className="w-[90%] m-auto h-fit flex flex-col md:grid md:grid-cols-2 gap-8 py-4">
      <div className="h-full flex items-center">
        <Gallery photos={photos} />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <div className="border-b border-tbMain">
            <h2 className="font-bold text-2xl">{product.name}</h2>
            <p className="text-tbDarkGrey">${product.price}</p>
          </div>
        </div>
        <div className="productInfo flex flex-col gap-4">
          {product.colors && <ProductColors product={product} />}
          {product.sizes && <ProductSizes product={product} />}
          <div>
            <p className="pb-2 text-sm">CANTIDAD</p>
            <QtyCounter />
          </div>
          <div className="desc">
            <h5 className="text-sm">DESCRIPCIÓN</h5>
            <p className="text-xs pt-3">{product.description}</p>
          </div>
        </div>
        <button
          onClick={() =>
            handleAddToCart(
              product.id,
              product.photos[0],
              product.name,
              product.price
            )
          }
          className="tbBtn text-center text-sm md:text-lg mt-3 w-full md:w-max"
        >
          Agregar al carrito
        </button>
      </div>
      <Toaster
        toastOptions={{
          className: "bg-green-500 text-white text-center",
          duration: 3000,
        }}
      />
    </div>
  );
};

export default ProductDetails;
