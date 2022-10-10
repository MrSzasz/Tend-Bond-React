import "./SearchBar.scss";
import { FiSearch } from "react-icons/fi";
import ReactSearchBox from "react-search-box";
import { Link } from "react-router-dom";

const SearchBar = ({array}) => {
  const data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];
  return (
    <div className="flex gap-2 items-center h-full w-36">
      <ReactSearchBox
        placeholder="¡Hola! ¿Qué buscabas?"
        iconBoxSize="30px"
                  // console.log(record.item.key)
          // console.log(`/http://127.0.0.1:5173/products/detalle/${record.item.key}`)
        onSelect={(record) => window.location.href = `https://trend-bond-react.netlify.app/products/detalle/${record.item.key}` }
        data={array}
        leftIcon={<FiSearch size={20} />  }
      />
    </div>
  );
};

export default SearchBar;
