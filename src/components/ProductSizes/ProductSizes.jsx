const ProductSizes = ({ product }) => {
  return (
    <div>
      <h2 className="pb-2 text-sm">TALLE</h2>
      <div className="w-full flex gap-4">
        <select
          name="sizesSelect"
          id="sizesSelect"
          className="text-xs text-tbDarkGrey bg-white"
        >
          {product.sizes.map((size, i) => (
            <option key={i} value={size.value}>{size.value}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProductSizes;
