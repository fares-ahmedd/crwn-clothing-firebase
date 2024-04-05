import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
function CategoriesPreview() {
  const { products } = useContext(ProductsContext);
  return (
    <>
      <div className="category-preview-container" style={{ padding: "20px" }}>
        {Object.keys(products).map((title) => {
          const productsArr = products[title];
          return (
            <CategoryPreview key={title} title={title} products={productsArr} />
          );
        })}
      </div>
    </>
  );
}

export default CategoriesPreview;
