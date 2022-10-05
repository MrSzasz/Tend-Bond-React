import ProductsCarousel from "../ProductsCarousel/ProductsCarousel";
import Loading from "../Loading/Loading";
import ProductDetails from "../ProductDetails/ProductDetails";
import { useState } from "react";

const ProductDetailsContainer = () => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const productoDePrueba = {
    name: "Anillo Forma",
    description:
      "Anillo hecho a mano. Confeccionado en alpaca bañado en plata o bronce.",
    price: null,
    colors: [
      {
        hex: "#C0C0C0",
        name: "Plata",
      },
      {
        hex: "#FFD700",
        name: "Dorado",
      },
    ],
    sizes: [
      {
        value: "14/15",
      },
      {
        value: "17/18",
      },
      {
        value: "20/21",
      },
    ],
    category: "accesorios",
    photos: [
      {
        link: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQI6l0AgxfPSyTF4qum4019sQ9Y1txjpVH5RekuJjQH6Gwr2oHiOlJ_nFH81RzYoqxxh6fORDvP_Vg1odIj3Wbp8JlxHvIAB_7sJUF8lrR6ff1sfJH5-jQEuw&usqp=CAE",
      },
    ],
  };

  return (
    <div className="w-full min-h-[70vh] relative overflow-hidden">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ProductDetails product={productoDePrueba} />
          <ProductsCarousel title={"También te puede interesar"} />
        </>
      )}
    </div>
  );
};

export default ProductDetailsContainer;
