const ProductSizes = ({product}) => {
  return (
    <div>
      <h2 className="pb-2 text-sm">TALLE</h2>
      <div className="w-full flex gap-4">
        {product.sizes.map((size) => (
          <button className="text-xs text-tbDarkGrey">{size.value}</button>
        ))}
      </div>
    </div>
  );
};

export default ProductSizes;
