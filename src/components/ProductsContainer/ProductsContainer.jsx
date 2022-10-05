import ProductCard from "../ProductCard/ProductCard";
import $ from "jquery";
import { AiOutlineLeft } from "react-icons/ai";
import { GoSettings } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import Filter from "../Filter/Filter";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../Loading/Loading";

const ProductsContainer = () => {
  const [filteredProductsArray, letFilteredProductsArray] = useState([]);
  const [loading, setLoading] = useState(true);

  const { cat } = useParams();

  const getProducts = () => {
    const url = "../data.json";
    fetch(url)
      .then((res) => res.json())
      .then((res) =>
        letFilteredProductsArray(
          res.filter((product) => product.category === cat)
        )
      )
      .finally(setLoading(false));
  };

  // ==========  fn GET DATA  ========== //

  useEffect(() => {
    getProducts();
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
          | NUEVO
        </p>
      </Link>
      <Filter show={show} />
      <div>
        <div
          className="flex items-center gap-1 w-fit cursor-pointer border-b border-b-transparent transition-all duration-tbBase hover:border-black"
          onClick={show}
        >
          <GoSettings className="rotate-90" />
          <button className="flex items-center gap-1">Filtros</button>
        </div>
        <h2 className="tbTitleStyles">New arrivals</h2>
        {loading ? (
          <Loading />
        ) : (
          <div className="min-h-[60vh] relative grid grid-cols-5 gap-3">
            {filteredProductsArray.map((item, i) => (
              <ProductCard
                key={i}
                img={item.photos[0].link}
                // price={item.price}
                title={item.name}
                // id={item.id}
                id={1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsContainer;
