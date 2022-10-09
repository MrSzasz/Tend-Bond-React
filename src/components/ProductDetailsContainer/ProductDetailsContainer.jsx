import ProductsCarousel from "../ProductsCarousel/ProductsCarousel";
import Loading from "../Loading/Loading";
import ProductDetails from "../ProductDetails/ProductDetails";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect } from "react";

const ProductDetailsContainer = () => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const getOneProductFromFirebase = async () => {
    const db = getFirestore();

    const dbQuery = doc(db, "ProductList", id);

    getDoc(dbQuery)
      .then((res) => {
        setSelectedProduct({ ...res.data(), id: res.id })
      })
      .finally(() => setLoading(false));
  };

  // ==========  fn GET DATA  ========== //

  useEffect(() => {
    getOneProductFromFirebase();
  }, []);


  return (
    <div className="w-full min-h-[70vh] relative overflow-hidden">
      {loading ? (
        <Loading />
      ) : (
        <>
          <ProductDetails photos={selectedProduct.photos} product={selectedProduct} />
          <ProductsCarousel title={"También te puede interesar"} />
        </>
      )}
    </div>
  );
};

export default ProductDetailsContainer;
