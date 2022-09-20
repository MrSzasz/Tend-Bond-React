import { BsCircleFill } from "react-icons/bs";
import MainButton from "../MainButton/MainButton";

const Filter = () => {
  return (
    <div className="w-1/4 fixed left-0 bg-white h-full z-10 hidden">
        <button>X</button>
      <h2>Categorías</h2>
      <div className="flex flex-col">
        <div>
          <input type="radio" name="filters" id="wrist" />
          <label htmlFor="wrist">Pulseras</label>
        </div>
        <div>
          <input type="radio" name="filters" id="earing" />
          <label htmlFor="earing">Aros</label>
        </div>
        <div>
          <input type="radio" name="filters" id="ring" />
          <label htmlFor="ring">Anillos</label>
        </div>
        <div>
          <input type="radio" name="filters" id="purse" />
          <label htmlFor="purse">Carteras</label>
        </div>
      </div>
      <h2>Color</h2>
      <div>
        <BsCircleFill />
        <BsCircleFill />
        <BsCircleFill />
        <BsCircleFill />
        <BsCircleFill />
        <BsCircleFill />
        <BsCircleFill />
        <BsCircleFill />
      </div>
      <h2>Talle</h2>
      <div>
        <button>S</button>
        <button>M</button>
        <button>L</button>
      </div>
      <MainButton link='#' text='Aplicar filtros'/>
    </div>
  );
};

export default Filter;
