import ProductCard from "../ProductCard/ProductCard";
import $ from "jquery";
import { AiOutlineLeft } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
// import Filter from "../Filter/Filter";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../Loading/Loading";
import {
  getDocs,
  getFirestore,
  collection,
  where,
  query,
} from "firebase/firestore";

const ProductsContainer = () => {
  const [filteredProductsArray, letFilteredProductsArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const { cat } = useParams();

  const getProductsFromFirebase = async () => {
    const db = getFirestore();

    const queryCollection = collection(db, "ProductList");

    const queryCollectionFiltered = query(
      queryCollection,
      where("category", "==", cat)
    );

    await getDocs(queryCollectionFiltered)
      .then((res) =>
        letFilteredProductsArray(
          res.docs.map((item) => ({ ...item.data(), id: item.id }))
        )
      )
      .finally(() => setLoading(false),console.log(filteredProductsArray));
  };

  // ==========  fn GET DATA  ========== //

  useEffect(() => {
    getProductsFromFirebase();
  }, [cat]);

  const show = () => {
    $("#modalProductsFilterContainer").slideToggle();
  };

  return (
    <div className="w-[90%] relative m-auto flex flex-col pb-6">
      <Link to="/" className="w-fit flex items-center gap-2 pb-8">
        <AiOutlineLeft />
        <p>
          <span className="text-gray-500 border-b transition-all duration-tbBase border-transparent hover:border-black">
            HOME
          </span>{" "}
          | <span className="uppercase">{cat}</span>
        </p>
      </Link>
      {/* <Filter show={show} /> */}
      <div>
        <div
          className="flex items-center gap-1 w-fit cursor-pointer border-b border-b-transparent transition-all duration-tbBase hover:border-black"
          onClick={show}
        ></div>
        <h2 className="tbTitleStyles">New arrivals</h2>
        {loading ? (
          <Loading />
        ) : (
          <div className="min-h-[60vh] relative grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {filteredProductsArray.map((item, i) => (
              <ProductCard
                key={i}
                img={item.photos[0].original}
                price={item.price}
                title={item.name}
                id={item.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsContainer;
