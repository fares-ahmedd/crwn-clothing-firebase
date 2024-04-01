import { useCart } from "../../context/CartContext";

function CheckoutItem({ checkoutItem }) {
  let { id, imageUrl, name, price, quantity } = checkoutItem;
  const { cartItems, setCartItems } = useCart();
  function handleDec() {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity - 1 } : item
      )
    );
    if (quantity <= 1) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    }
  }
  function handleInc() {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity + 1 } : item
      )
    );
  }
  function handleDelete() {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }
  return (
    <div className="checkout-cart">
      <img src={imageUrl} alt={name} />
      <span className="name">{name}</span>
      <div className="count">
        <span className="dec" onClick={handleDec}>
          &lt;
        </span>
        <span className="quantity">{quantity}</span>
        <span className="inc" onClick={handleInc}>
          &gt;
        </span>
      </div>
      <span className="price">${price}</span>
      <span className="remove" onClick={handleDelete}>
        x
      </span>
    </div>
  );
}

export default CheckoutItem;
