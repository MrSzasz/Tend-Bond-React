import $ from "jquery";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductEditForm = ({ product, action }) => {
  const [productForDB, setProductForDB] = useState({
    name: "",
    description: "",
    price: "",
    colors: [
      {
        hex: "",
        name: "",
      },
    ],
    sizes: [
      {
        value: "",
      },
    ],
    category: "",
    photos: [
      {
        original: "",
        thumbnail: "",
      },
    ],
  });
  $("#mainButtonAdd").on("click", () => {
    $("#colorsInputContainer")
      .append(`<div className="w-full flex items-center flex-col">
    <label htmlFor="newProdColors">Nombre del color</label>
    <input
      className="border-2 border-black w-full text-black py-1 px-2 text-center"
      type="text"
      name="newProdColors[]"
      id="newProdColors"
      defaultValue={color.name}
    />
  </div>
  <input
    className="border-2 border-black w-1/6 text-black py-1 px-2 self-end"
    type="color"
    name="newProdColors[]"
    id="newProdColors"
    defaultValue={color.hex}
  />
  </div>`);
  });

  const navigate = useNavigate();

  const handleDeleteColor = () => {};
  const handleDeleteSize = () => {};
  const handleDeleteImg = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const getProduct = {
    //   name: $("#newProdName").val(),
    //   description: $("#newProdDesc").val(),
    //   price: Number($("#newProdPrice").val()),
    //   colors: [
    //     {
    //       hex: "",
    //       name: "",
    //     },
    //   ],
    //   sizes: [
    //     {
    //       value: "",
    //     },
    //   ],
    //   category: $("#newProdDesc").val(),
    //   photos: [
    //     {
    //       original: "",
    //       thumbnail: "",
    //     },
    //   ],
    // };

    // console.log(getProduct);

    // navigate("/fbdash");
  };

  const handleAddColor = () => {
    $(`<div class="w-full flex text-center items-center">
    <div class="w-full flex items-center flex-col">
      <label htmlFor="newProdColors">Nombre del color</label>
      <input
        class="border-2 border-black w-full text-black py-1 px-2 text-center"
        type="text"
        name="newProdColors[]"
      />
    </div>
    <input
      class="border-2 border-black w-1/6 text-black py-1 px-2 self-end"
      type="color"
      name="newProdColors[]"
    />
  </div>`).appendTo("#colorsInputContainer");
  };

  const handleAddSize = () => {
    $(`          <div class="flex flex-col text-center items-center">
    <label htmlFor="newProdSizes">Valor</label>
    <input
      class="border-2 border-black w-full text-black py-1 px-2"
      type="text"
      name="newProdSizes"
      id="newProdSizes"
    />
  </div>`).appendTo("#sizesInputContainer");
  };
  const handleAddImg = () => {
    $(`              <div class="flex text-center items-center w-full">
    <label htmlFor="newProdPhotos">Link</label>
    <input
      class="border-2 border-black w-full text-black py-1 px-2"
      type="text"
      name="newProdPhotos"
    />
    <img class="h-32 w-32" src=${
      product
        ? photo.thumbnail
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
    } alt="" />
  </div>`).appendTo("#photosInputContainer");
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

      <section className="flex flex-col text-center items-center">
        <label htmlFor="newProdDesc">Descripción</label>
        <textarea
          className="border-2 border-black w-full text-black py-1 px-2"
          name="newProdDesc"
          id="newProdDesc"
          defaultValue={product ? product.description : ""}
        />
      </section>

      <section className="flex flex-col text-center items-center">
        <label htmlFor="newProdPrice">Precio (SOLO NUMERO)</label>
        <input
          className="border-2 border-black w-full text-black py-1 px-2 text-center"
          type="text"
          name="newProdPrice"
          id="newProdPrice"
          defaultValue={product ? product.price : ""}
        />
      </section>

      <section className="flex flex-col text-center items-center">
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
      </section>

      <section className="flex flex-col text-center items-center">
        <h2>Colores</h2>
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex flex-col gap-2" id="colorsInputContainer">
            {product ? (
              product.colors.map((color, i) => (
                <div
                  className="flex text-center items-center w-full flex-col"
                  key={i}
                >
                  <div className="w-full flex text-center items-center">
                    <div className="w-full flex items-center flex-col">
                      <label htmlFor="newProdColors">Nombre del color</label>
                      <input
                        className="border-2 border-black w-full text-black py-1 px-2 text-center"
                        type="text"
                        name="newProdColors[]"
                        id="newProdColors"
                        defaultValue={color.name}
                      />
                    </div>
                    <input
                      className="border-2 border-black w-1/6 text-black py-1 px-2 self-end"
                      type="color"
                      name="newProdColors[]"
                      id="newProdColors"
                      defaultValue={color.hex}
                    />
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="w-full flex text-center items-center">
                  <div className="w-full flex items-center flex-col">
                    <label htmlFor="newProdColors">Nombre del color</label>
                    <input
                      className="border-2 border-black w-full text-black py-1 px-2 text-center"
                      type="text"
                      name="newProdColors[]"
                      id="newProdColors"
                    />
                  </div>
                  <input
                    className="border-2 border-black w-1/6 text-black py-1 px-2 self-end"
                    type="color"
                    name="newProdColors[]"
                    id="newProdColors"
                  />
                </div>
              </>
            )}
          </div>
          <div className="w-full flex gap-2">
            <button
              className="w-full text-center bg-red-500 hover:bg-red-600 transition-all rounded-lg"
              onClick={handleDeleteColor}
            >
              Quitar color
            </button>
            <button
              className="w-full text-center bg-green-500 hover:bg-green-600 transition-all rounded-lg"
              onClick={handleAddColor}
            >
              Agregar color
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col text-center items-center">
        <h2>Talles</h2>
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex flex-col gap-2" id="sizesInputContainer">
            {product ? (
              <>
                {product.sizes &&
                  product.sizes.map((size, i) => (
                    <div className="flex flex-col text-center items-center w-full">
                      <label htmlFor="newProdSizes">Valor</label>
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
                <label htmlFor="newProdSizes">Valor</label>
                <input
                  className="border-2 border-black w-full text-black py-1 px-2"
                  type="text"
                  name="newProdSizes"
                  id="newProdSizes"
                />
              </div>
            )}
          </div>
          <div className="w-full flex gap-2">
            <button
              className="w-full text-center bg-red-500 hover:bg-red-600 transition-all rounded-lg"
              onClick={handleDeleteSize}
            >
              Quitar talle
            </button>
            <button
              className="w-full text-center bg-green-500 hover:bg-green-600 transition-all rounded-lg"
              onClick={handleAddSize}
            >
              Agregar talle
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col text-center items-center">
        <h2>Fotos</h2>
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex flex-col gap-2" id="photosInputContainer">
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
                <img
                  className="h-32 w-32"
                  src={
                    product
                      ? photo.thumbnail
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                  }
                  alt=""
                />
              </div>
            )}
          </div>
          <div className="w-full flex gap-2">
            <button
              className="w-full text-center bg-red-500 hover:bg-red-600 transition-all rounded-lg"
              onClick={handleDeleteImg}
            >
              Quitar foto
            </button>
            <button
              className="w-full text-center bg-green-500 hover:bg-green-600 transition-all rounded-lg"
              onClick={handleAddImg}
            >
              Agregar foto
            </button>
          </div>
        </div>
      </section>

      <button className="py-2 px-3 w-1/2 my-2 border-2 text-center border-black transition-all bg-green-500 hover:bg-green-600 rounded-lg mx-auto">
        {action}
      </button>
    </form>
  );
};

export default ProductEditForm;
