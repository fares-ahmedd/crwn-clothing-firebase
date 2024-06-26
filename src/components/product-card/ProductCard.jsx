import { useCart } from "../../context/CartContext";
import Button from "../button/Button";
import "./ProductCard.styles.scss";
function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart, setIsCartOpen } = useCart();
  function addProductToCart() {
    addItemToCart(product);
    setIsCartOpen(true);
  }
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={"invert"} onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
}

export default ProductCard;
