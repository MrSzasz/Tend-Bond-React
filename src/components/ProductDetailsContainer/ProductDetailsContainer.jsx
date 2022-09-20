import ProductsCarousel from "../ProductsCarousel/ProductsCarousel";
import ProductDetails from "../ProductDetails/ProductDetails"

const ProductDetailsContainer = () => {
  return (
    <div>
      <ProductDetails/>
      <ProductsCarousel title={"También te puede interesar"} />
    </div>
  );
};

export default ProductDetailsContainer;
