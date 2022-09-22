import "./Filter.scss";

import { BsCircleFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import MainButton from "../MainButton/MainButton";

const Filter = () => {
  return (
    <div className="min-w-min max-w-1/4 fixed left-0 bg-white h-full z-10 p-4 flex flex-col gap-3 hidden">
      <button className="absolute top-1 right-1"><GrClose color="#6D6D6D"/></button>
      <div>
        <h2 className="pb-2">CATEGORÍA</h2>
        <div className="flex flex-col gap-2">
          <label
            className="labelContainer flex content-center h-6 items-center text-tbDarkGrey text-sm"
            htmlFor="bracelet"
          >
            <p className="h-full">Pulseras</p>
            <input type="radio" name="filters" id="bracelet" />
            <span className="check"></span>
          </label>
          <label
            className="labelContainer h-6 items-center flex content-center text-tbDarkGrey text-sm"
            htmlFor="earing"
          >
            Aros
            <input type="radio" name="filters" id="earing" />
            <span className="check"></span>
          </label>
          <label
            className="labelContainer h-6 items-center flex content-center text-tbDarkGrey text-sm"
            htmlFor="ring"
          >
            Anillos
            <input type="radio" name="filters" id="ring" />
            <span className="check"></span>
          </label>
          <label
            className="labelContainer h-6 items-center flex content-center text-tbDarkGrey text-sm"
            htmlFor="purse"
          >
            Carteras
            <input type="radio" name="filters" id="purse" />
            <span className="check"></span>
          </label>
        </div>
      </div>
      <div>
        <h2 className="pb-2">COLOR</h2>
        <div className="colorContainer grid grid-cols-4 gap-4 w-fit">
          <button>
            <BsCircleFill size={23} color="#8A566D" />
          </button>
          <button>
            <BsCircleFill size={23} color="#6D6D6D" />
          </button>
          <button>
            <BsCircleFill size={23} color="#0087A5" />
          </button>
          <button>
            <BsCircleFill size={23} color="#F48F4A" />
          </button>
          <button>
            <BsCircleFill size={23} color="#000000" />
          </button>
          <button>
            <BsCircleFill size={23} color="#ffffff" />
          </button>
          <button>
            <BsCircleFill size={23} color="#FFC49B" />
          </button>
          <button>
            <BsCircleFill size={23} color="#5b5b5b" />
          </button>
        </div>
      </div>
      <div className="pb-9">
        <h2 className="pb-2">TALLE</h2>
        <div className="w-full flex gap-4">
          <button className="underline">S</button>
          <button>M</button>
          <button>L</button>
        </div>
      </div>
      <MainButton link="#" text="Aplicar filtros" />
    </div>
  );
};

export default Filter;
