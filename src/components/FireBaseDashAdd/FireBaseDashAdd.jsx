import { AiOutlineArrowLeft } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";
import ProductEditForm from "../ProductEditForm/ProductEditForm";

const FireBaseDashAdd = () => {
  return (
    <div className="p-4 min-h-screen">
      <Link
        to="/fbdash"
        className="flex gap-2 items-center p-2 pl-0 mb-4 hover:gap-4 transition-all border-b-2 hover:border-black w-fit"
      >
        <AiOutlineArrowLeft />
        Volver
      </Link>
      <p className="w-full text-center py-2 bg-[#F7B217] text-black uppercase border-4 border-black mb-4">
        IMPORTANTE, los siguientes datos deben ingresarse de una forma
        particular
        <br />
        <br />
        = PRECIO =
        <br />
        solo ingresar números
        <br />
        <br />
        = COLORES =
        <br />
        ingresar el nombre de los colores y seleccionar el color que se mostrará
        con el selector
        <br />
        <br />
        = FOTOS =
        <br />
        Unicamente ingresar link de Imgur que contenga id, si tiene{" "}
        <i>undefined</i>, esperar y volver a intentar, o eliminar la imagen y
        volver a subirla a Imgur
        <br />
        <br />
        = Ejemplos de links =
        <br />
        ✔ https://imgur.com/o8ATvr8
        <br />
        ❌ https://imgur.com/undefined
        <br />
        <br />
        <a href="https://youtu.be/_3e5pUof0Cc" className="underline flex justify-center items-center gap-2 w-fit mx-auto" target="_blank">
          Ver tutorial de subida a Imgur <HiExternalLink/>
        </a>
      </p>
      <ProductEditForm action="SUBIR A DB" />
    </div>
  );
};

export default FireBaseDashAdd;
