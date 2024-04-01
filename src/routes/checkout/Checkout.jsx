import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Checkout.styles.scss";
import CheckoutItem from "./CheckoutItem";
import Button from "../../components/button/Button";

function Checkout() {
  const { cartItems } = useCart();
  const totalPrice = cartItems
    .map((item) => item.quantity * item.price)
    .reduce((acc, cur) => acc + cur, 0);
  console.log(totalPrice);
  return (
    <div className="checkout-container">
      <header>
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </header>
      <section>
        {cartItems.length === 0 ? (
          <div className="empty">
            <p>now you don't have any product in the cart </p>
            <Link to={"/shop"}>
              <Button>Go back</Button>
            </Link>
          </div>
        ) : (
          cartItems.map((checkoutItem) => (
            <CheckoutItem checkoutItem={checkoutItem} key={checkoutItem.id} />
          ))
        )}
        {cartItems.length > 0 && <h1>Total Price: ${totalPrice}</h1>}
      </section>
    </div>
  );
}

export default Checkout;
