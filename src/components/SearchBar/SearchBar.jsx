import "./SearchBar.scss";
import { FiSearch } from "react-icons/fi";
import ReactSearchBox from "react-search-box";

const SearchBar = ({ array }) => {
  return (
    <div className="flex gap-2 items-center h-full w-48">
      <ReactSearchBox
        placeholder="¡Hola! ¿Qué buscas?"
        iconBoxSize="30px"
        onSelect={(record) =>
          (window.location.href = `https://trend-bond-react.netlify.app/products/detalle/${record.item.key}`)
        }
        data={array}
        leftIcon={<FiSearch size={20} />}
      />
    </div>
  );
};

export default SearchBar;
