import { useParams } from "react-router-dom";
import "./Category.styles.scss";
import { useCart } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/ProductCard";
import { ProductsContext } from "../../context/ProductsContext";

function Category() {
  const { category } = useParams();
  const { products } = useContext(ProductsContext);
  const [items, setItems] = useState(products[category]);
  useEffect(() => {
    setItems(products[category]);
  }, [category, products]);
  return (
    <div className="category-containerr">
      {items &&
        items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
}

export default Category;
