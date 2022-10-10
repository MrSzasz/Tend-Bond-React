import $ from "jquery";
import { BsCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const ProductColors = ({ product }) => {
  const [colorValue, setColorValue] = useState("");

  const getDefaultChecked = () => {
    $("input[type=radio][name=colorSelect]").first().attr("checked", "checked");
    setColorValue($("input[type=radio][name=colorSelect]").val());
  };

  const getChecked = () => {
    const radioButton = $("input[type=radio][name=colorSelect]");
    radioButton.on("change", () => {
      setColorValue($("input[type=radio][name=colorSelect]:checked").val());
    });
  };

  useEffect(() => {
    getDefaultChecked();
  }, []);

  useEffect(() => {
    getChecked();
  }, [colorValue]);

  return (
    <div>
      <h2 className="pb-2 text-sm">COLOR: {colorValue}</h2>
      <div className="colorContainer flex flex-wrap gap-4 w-fit">
        {product.colors.map((color, i) => (
          <div className="flex" key={i}>
            <input
              className="peer fixed opacity-0 pointer-events-none"
              type="radio"
              name="colorSelect"
              id={color.name}
              value={color.name}
            />
            <label
              className="border-2 peer-checked:border-black hover:border-black border-tbGray rounded-full cursor-pointer"
              htmlFor={color.name}
              title={color.name}
            >
              <BsCircleFill size={23} color={color.hex} />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductColors;
