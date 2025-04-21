import ProductCard from "../ProductCard";

const ProductGrid = ({ data, activeView }) => {
  return (
    <>
      <div
        className={`cs_grid_5_column cs_products_view cs_style_1 ${
          activeView === "grid" ? "active" : ""
        }`}
      >
        {data.map((product, index) => (
          <div className="cs_grid_col" key={index}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
