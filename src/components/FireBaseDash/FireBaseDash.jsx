import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

const FireBaseDash = () => {
  const [productsFromDB, setProductsFromDB] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProductsFromFirebase = async () => {
    const db = getFirestore();

    const queryCollection = collection(db, "ProductList");

    const orderedQuery = query(queryCollection, orderBy("category"));

    await getDocs(orderedQuery)
      .then((res) =>
        setProductsFromDB(
          res.docs.map((item) => ({ ...item.data(), id: item.id }))
        )
      )
      .finally(() => setLoading(false));
  };

  // ==========  fn GET DATA  ========== //

  useEffect(() => {
    getProductsFromFirebase();
  }, []);

  return (
    <div className="overflow-y-auto">
      <div className="w-full flex flex-col justify-center">
        <p className="w-full text-center py-2 bg-red-700 text-white uppercase">
          IMPORTANTE El botón de eliminar SOLO FUNCIONARÁ al hacer doble click,
          para evitar los miss clicks
        </p>
        <Link
          to={"/fbdash/add"}
          className="py-2 px-3 w-1/2 my-2 border-2 text-center border-black transition-all bg-green-500 hover:bg-green-600 rounded-lg mx-auto"
        >
          Agregar Producto
        </Link>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <table className="w-full border-y-2 my-4 border-black">
          <thead className="border-bottom-2 border-black bg-slate-600 text-white">
            <tr>
              <th>CAT</th>
              <th>PRODUCTO</th>
              <th>PRECIO</th>
              <th>TALLE</th>
              <th>COLOR</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {productsFromDB.map((product) => (
              <tr
                key={product.id}
                className="text-center border-2 border-slate-700 even:bg-slate-200"
              >
                <td className="text-xs py-2">{product.category}</td>
                <td>{product.name}</td>
                <td>
                  ${product.price}
                  {product.price2 && `, $${product.price2}`}
                </td>
                <td>
                  {product.size != null && product.size.forEach((size) => size)}
                </td>
                <td>{product.colors.forEach((color) => color)}</td>
                <td className="bg-blue-500 hover:bg-blue-600 transition-all py-1">
                  <Link
                    to={`/fbdash/edit/${product.id}`}
                    className="w-full flex justify-center"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="bg-red-500 transition-all hover:bg-red-600 py-1">
                  <button className="w-full flex justify-center">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FireBaseDash;
