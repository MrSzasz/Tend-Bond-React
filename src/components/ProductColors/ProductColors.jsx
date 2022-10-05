import { BsCircleFill } from "react-icons/bs";

const ProductColors = ({product}) => {
  return (
    <div>
    <h2 className="pb-2 text-sm">COLOR</h2>
    <div className="colorContainer flex gap-4 w-fit">
      {product.colors.map((color) => (
        <button>
          <BsCircleFill size={23} color={color.hex} />
        </button>
      ))}
    </div>
  </div>
  )
}

export default ProductColors