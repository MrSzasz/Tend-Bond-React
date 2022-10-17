import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, Navigate, useParams } from "react-router-dom";
import ProductEditForm from "../ProductEditForm/ProductEditForm";
import { doc, getDoc, getFirestore } from "firebase/firestore"; // Importamos lo necesario
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const FireBaseDashEdit = () => {
  const [productFromDB, setProductFromDB] = useState({});
  const [loading, setLoading] = useState(true);
  const { prodId } = useParams();

  const handleGet = async () => {
    const db = await getFirestore();

    const userInDB = await getDoc(doc(db, "ProductList", prodId));

    userInDB.exists() ? (
      setProductFromDB(userInDB.data()),
      setLoading(false)
    ) : (
      <Navigate to={"/fbdash"} />
    );
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="p-4 min-h-screen">
          <Link
            to="/fbdash"
            className="flex gap-2 items-center p-2 pl-0 mb-4 hover:gap-4 transition-all border-b-2 hover:border-black w-fit"
          >
            <AiOutlineArrowLeft />
            Volver
          </Link>
          <p className="bg-red-600 text-white p-4 text-center">
            IMPORTANTE, los siguientes datos deben ingresarse de una forma
            particular
            <br />
            <br />
            PRECIO: solo ingresar números
            <br />
            COLORES: ingresar el nombre de los colores
            <br />
          </p>
          <ProductEditForm action="EDITAR" product={productFromDB} />
        </div>
      )}
    </>
  );
};

export default FireBaseDashEdit;
