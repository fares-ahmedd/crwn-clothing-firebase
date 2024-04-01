import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import ProductCard from "../../components/product-card/ProductCard";
import "./Shop.styles.scss";
function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Shop;
