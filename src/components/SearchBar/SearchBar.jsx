import "./SearchBar.scss";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="flex gap-2 items-center h-full">
      <label className="cursor-pointer" for="browser">
        <FiSearch size={20} />
      </label>
      <input
        list="browsers"
        name="browser"
        id="browser"
        className="border-b border-black w-0 opacity-0 transition-all outline-none focus-visible:w-auto focus-visible:opacity-100"
        placeholder="¡Hola! ¿Qué buscabas?"
      />

      <datalist id="browsers">
        <option value="Edge" />
        <option value="Firefox" />
        <option value="Chrome" />
        <option value="Opera" />
        <option value="Safari" />
      </datalist>
    </div>
  );
};

export default SearchBar;
