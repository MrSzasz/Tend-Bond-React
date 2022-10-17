import $ from "jquery";
import { useNavigate } from "react-router-dom";

const ProductEditForm = ({ product, action }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/fbdash");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-600 flex flex-col text-white text-lg gap-6 py-4 px-[10%]"
    >
      <div className="flex flex-col text-center items-center">
        <label htmlFor="newProdName">Nombre</label>
        <input
          className="border-2 border-black w-full text-black py-1 px-2 text-center"
          type="text"
          name="newProdName"
          id="newProdName"
          defaultValue={product ? product.name : ""}
        />
      </div>
      <div className="flex flex-col text-center items-center">
        <label htmlFor="newProdDesc">Descripción</label>
        <textarea
          className="border-2 border-black w-full text-black py-1 px-2"
          name="newProdDesc"
          id="newProdDesc"
          defaultValue={product ? product.description : ""}
        />
      </div>
      <div className="flex flex-col text-center items-center">
        <label htmlFor="newProdPrice">Precio (SOLO NUMERO)</label>
        <input
          className="border-2 border-black w-full text-black py-1 px-2 text-center"
          type="text"
          name="newProdPrice"
          id="newProdPrice"
          defaultValue={product ? product.price : ""}
        />
      </div>
      <div className="flex flex-col text-center items-center">
        <label htmlFor="newProdCat">Categoría</label>
        <select
          className="border-2 border-black w-1/4 text-black py-1 px-2"
          type="text"
          name="newProdCat"
          id="newProdCat"
          defaultValue={product ? product.category : ""}
        >
          <option value="deco">DECO</option>
          <option value="accesorios">ACCESORIOS</option>
          <option value="add">AGREGAR CATEGORÍA...</option>
        </select>
        {$("#newProdCat").val() === "add" && (
          <input
            className="border-2 border-black w-full text-black py-1 px-2 text-center"
            type="text"
            name="newProdCatAdd"
            id="newProdCatAdd"
          />
        )}
      </div>
      <div className="flex flex-col text-center items-center">
        <h2>Colores</h2>
        {product ? (
          product.colors.map((color, i) => (
            <div className="flex text-center items-center w-full" key={i}>
              <div className="w-full flex items-center flex-col">
                <label htmlFor="newProdColors">Nombre del color</label>
                <input
                  className="border-2 border-black w-full text-black py-1 px-2 text-center"
                  type="text"
                  name="newProdColors"
                  id="newProdColors"
                  defaultValue={color.name}
                />
              </div>
              <input
                className="border-2 border-black w-1/6 text-black py-1 px-2 self-end"
                type="color"
                name="newProdColors"
                id="newProdColors"
                defaultValue={color.hex}
              />
            </div>
          ))
        ) : (
          <div className="flex text-center items-center w-full">
            <div className="w-full flex items-center flex-col">
              <label htmlFor="newProdColors">Nombre del color</label>
              <input
                className="border-2 border-black w-full text-black py-1 px-2 text-center"
                type="text"
                name="newProdColors"
                id="newProdColors"
              />
            </div>
            <input
              className="border-2 border-black w-1/6 text-black py-1 px-2 self-end"
              type="color"
              name="newProdColors"
              id="newProdColors"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col text-center items-center">
        <h2>Talles</h2>
        {product ? (
          <>
            {product.sizes &&
              product.sizes.map((size, i) => (
                <div className="flex flex-col text-center items-center w-full">
                  <label htmlFor="newProdSizes">Talles</label>
                  <input
                    className="border-2 border-black w-full text-black py-1 px-2 text-center"
                    type="text"
                    name="newProdSizes"
                    id="newProdSizes"
                    defaultValue={size.value}
                  />
                </div>
              ))}
          </>
        ) : (
          <div className="flex flex-col text-center items-center">
            <label htmlFor="newProdSizes">Talles</label>
            <input
              className="border-2 border-black w-full text-black py-1 px-2"
              type="text"
              name="newProdSizes"
              id="newProdSizes"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col text-center items-center">
        <h2>Fotos</h2>
        {product ? (
          product.photos.map((photo, i) => (
            <div className="flex text-center items-center w-full" key={i}>
              <div className="w-full flex items-center flex-col">
                <label htmlFor="newProdPhotos">Link</label>
                <input
                  className="border-2 border-black w-full text-black py-1 px-2"
                  type="text"
                  name="newProdPhotos"
                  id="newProdPhotos"
                  defaultValue={photo.original}
                />
              </div>
              <img src={photo.thumbnail} alt="" />
            </div>
          ))
        ) : (
          <div className="flex text-center items-center w-full">
            <label htmlFor="newProdPhotos">Link</label>
            <input
              className="border-2 border-black w-full text-black py-1 px-2"
              type="text"
              name="newProdPhotos"
              id="newProdPhotos"
            />
          </div>
        )}
      </div>
      <button className="py-2 px-3 w-1/2 my-2 border-2 text-center border-black transition-all bg-green-500 hover:bg-green-600 rounded-lg mx-auto">
        {action}
      </button>
    </form>
  );
};

export default ProductEditForm;
