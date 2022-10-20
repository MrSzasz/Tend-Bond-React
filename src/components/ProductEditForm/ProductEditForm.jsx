import $ from "jquery";
import { useEffect, useState } from "react";
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

  const navigate = useNavigate();

  // const handleBlur = (e) => {
  //   // console.log(e.target.value);
  //   e.target.nextElementSibling.src = `${e.target.value}t.png`;
  // };

  // $("input[name='newProdPhotos']").on("blur", (e) => {
  //   console.log(e.target.value);
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let colorsForProduct = [];
    let sizesForProduct = [];
    let photosForProduct = [];

    $.each($(".generatedColorsContainer"), (i, val) => {
      colorsForProduct.push({
        hex: val.lastChild.value,
        name: val.children[0].firstChild.value,
      });
    });

    $.each($(".generatedSizesContainer"), (i, val) => {
      sizesForProduct.push({
        value: val.firstChild.value,
      });
    });

    $.each($(".generatedPhotosContainer"), (i, val) => {
      photosForProduct.push({
        original: `${val.firstChild.value}.png`,
        thumbnail: `${val.firstChild.value}t.png`,
      });
    });

    const getProduct = {
      name: $("#newProdName").val(),
      description: $("#newProdDesc").val(),
      price: Number($("#newProdPrice").val()),
      colors: colorsForProduct,
      sizes: sizesForProduct.length === 0 && null,
      category: $("#newProdDesc").val(),
      photos: photosForProduct,
    };

    console.log(getProduct);

    // navigate("/fbdash");
  };

  const handleAddColor = () => {
    $(
      '<div class="w-full flex text-center items-center generatedColorsContainer"><div class="w-full flex items-center flex-col"><input class="border-2 border-black w-full text-black py-1 px-2 text-center" type="text" name="newProdColors" required /></div><input class="border-2 border-black w-1/6 text-black py-1 px-2 self-end" type="color" name="newProdColorsHex" required /></div>'
    ).appendTo("#colorsInputContainer");
  };

  const handleDeleteInput = (containerId) => {
    $(`#${containerId} div:last-child`).remove();
  };

  const handleAddSize = () => {
    $(
      '<div class="flex flex-col text-center items-center generatedSizesContainer"><input class="border-2 text-center border-black w-full text-black py-1 px-2" type="text" name="newProdSizes" required /></div>'
    ).appendTo("#sizesInputContainer");
  };

  const handleAddImg = () => {
    // $(
    //   `<div class="flex text-center items-center w-full generatedPhotosContainer"><input class="border-2 border-black w-full text-black py-1 px-2" type="text" name="newProdPhotos"/><img class="h-32 w-32 imgExample" src=${
    //     product ? photo.thumbnail : "https://imgur.com/VYce1U1.png"
    //   } alt="" /></div>`
    // ).appendTo("#photosInputContainer");
    $(
      `<div class="flex text-center items-center w-full generatedPhotosContainer"><input class="border-2 text-center border-black w-full text-black py-1 px-2" type="text" name="newProdPhotos" required/></div>`
    ).appendTo("#photosInputContainer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-600 flex flex-col text-white text-lg gap-6 py-4 px-[10%]"
    >
      <section className="flex flex-col text-center items-center">
        <label htmlFor="newProdName">Nombre</label>
        <input
          className="border-2 border-black w-full text-black py-1 px-2 text-center"
          type="text"
          name="newProdName"
          id="newProdName"
          required
          defaultValue={product ? product.name : ""}
        />
      </section>

      <section className="flex flex-col text-center items-center">
        <label htmlFor="newProdDesc">Descripción</label>
        <textarea
          className="border-2 border-black w-full text-black py-1 px-2"
          name="newProdDesc"
          id="newProdDesc"
          required
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
          required
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
          required
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
            required
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
                  className="flex text-center items-center w-full flex-col generatedColorsContainer"
                  key={i}
                >
                  <div className="w-full flex text-center items-center">
                    <div className="w-full flex items-center flex-col">
                      <input
                        className="border-2 border-black w-full text-black py-1 px-2 text-center"
                        type="text"
                        name="newProdColors"
                        id="newProdColors"
                        defaultValue={color.name}
                        required
                      />
                    </div>
                    <input
                      className="border-2 border-black w-1/6 text-black py-1 px-2 self-end"
                      type="color"
                      name="newProdColorsHex"
                      id="newProdColorsHex"
                      defaultValue={color.hex}
                      required
                    />
                  </div>
                </div>
              ))
            ) : (
              <>
                <div className="w-full flex text-center items-center generatedColorsContainer">
                  <div className="w-full flex items-center flex-col">
                    <input
                      className="border-2 border-black w-full text-black py-1 px-2 text-center"
                      type="text"
                      name="newProdColors"
                      id="newProdColors"
                      required
                    />
                  </div>
                  <input
                    className="border-2 border-black w-1/6 text-black py-1 px-2 self-end"
                    type="color"
                    name="newProdColorsHex"
                    id="newProdColorsHex"
                    required
                  />
                </div>
              </>
            )}
          </div>
          <div className="w-full flex gap-2">
            <span
              className="w-full text-center bg-red-500 hover:bg-red-600 transition-all rounded-lg cursor-pointer"
              onClick={() => handleDeleteInput("colorsInputContainer")}
            >
              Quitar color
            </span>
            <span
              className="w-full text-center bg-green-500 hover:bg-green-600 transition-all rounded-lg cursor-pointer"
              onClick={handleAddColor}
            >
              Agregar color
            </span>
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
                    <div className="flex flex-col text-center items-center w-full generatedSizesContainer">
                      <input
                        className="border-2 border-black w-full text-black py-1 px-2 text-center"
                        type="text"
                        name="newProdSizes"
                        id="newProdSizes"
                        defaultValue={size.value}
                        required
                      />
                    </div>
                  ))}
              </>
            ) : (
              <div className="flex flex-col text-center items-center generatedSizesContainer">
                <input
                  className="border-2 border-black w-full text-black py-1 px-2 text-center"
                  type="text"
                  name="newProdSizes"
                  id="newProdSizes"
                  required
                />
              </div>
            )}
          </div>
          <div className="w-full flex gap-2">
            <span
              className="w-full text-center bg-red-500 hover:bg-red-600 transition-all rounded-lg cursor-pointer"
              onClick={() => handleDeleteInput("sizesInputContainer")}
            >
              Quitar talle
            </span>
            <span
              className="w-full text-center bg-green-500 hover:bg-green-600 transition-all rounded-lg cursor-pointer"
              onClick={handleAddSize}
            >
              Agregar talle
            </span>
          </div>
        </div>
      </section>

      <section className="flex flex-col text-center items-center">
        <h2>Fotos</h2>
        <div className="w-full flex flex-col gap-2">
          <div className="w-full flex flex-col gap-2" id="photosInputContainer">
            {product ? (
              product.photos.map((photo, i) => (
                // <div
                //   className="flex text-center items-center w-full generatedPhotosContainer"
                //   key={i}
                // >
                //   <div className="w-full flex items-center flex-col">
                //     <label htmlFor="newProdPhotos">Link</label>
                //     <input
                //       className="border-2 border-black w-full text-black py-1 px-2"
                //       type="text"
                //       name="newProdPhotos"
                //       id="newProdPhotos"
                //       defaultValue={photo.original}
                //     />
                //   </div>
                //   <img
                //     className="imgExample h-32 w-32 object-cover"
                //     src={photo.thumbnail}
                //     alt=""
                //   />
                // </div>
                <div
                  className="flex text-center items-center w-full generatedPhotosContainer"
                  key={i}
                >
                  <div className="w-full flex items-center flex-col">
                    <label htmlFor="newProdPhotos">Link</label>
                    <input
                      className="border-2 border-black w-full text-black py-1 px-2 text-center"
                      type="text"
                      name="newProdPhotos"
                      id="newProdPhotos"
                      defaultValue={photo.original}
                      required
                    />
                  </div>
                </div>
              ))
            ) : (
              // <div className="flex text-center items-center w-full generatedPhotosContainer">
              //   <input
              //     className="border-2 border-black w-full text-black py-1 px-2"
              //     type="text"
              //     name="newProdPhotos"
              //     id="newProdPhotos"
              //   />
              //   <img
              //     className="imgExample h-32 w-32 object-cover"
              //     src={
              //       product
              //         ? photo.thumbnail
              //         : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
              //     }
              //     alt=""
              //   />
              // </div>
              <div className="flex text-center items-center w-full generatedPhotosContainer">
                <input
                  className="border-2 border-black w-full text-black py-1 px-2 text-center"
                  type="text"
                  name="newProdPhotos"
                  id="newProdPhotos"
                  required
                />
              </div>
            )}
          </div>
          <div className="w-full flex gap-2">
            <span
              className="w-full text-center bg-red-500 hover:bg-red-600 transition-all rounded-lg cursor-pointer"
              onClick={() => handleDeleteInput("photosInputContainer")}
            >
              Quitar foto
            </span>
            <span
              className="w-full text-center bg-green-500 hover:bg-green-600 transition-all rounded-lg cursor-pointer"
              onClick={handleAddImg}
            >
              Agregar foto
            </span>
          </div>
        </div>
      </section>

      <button
        type="submit"
        className="py-2 px-3 w-1/2 my-2 border-2 text-center border-black transition-all bg-green-500 hover:bg-green-600 rounded-lg mx-auto"
      >
        {action}
      </button>
    </form>
  );
};

export default ProductEditForm;
