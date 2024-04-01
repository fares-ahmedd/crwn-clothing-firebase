import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import "./CartDropdown.styles.scss";
function CartDropdown() {
  const { cartItems, setIsCartOpen } = useCart();
  return (
    <div className="cart-dropdown-container">
      {cartItems.length === 0 ? (
        <strong>you don't have any products yet</strong>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem cartItem={item} key={item.id} />
            ))}
          </div>
          <Link to={"/checkout"}>
            <Button onClick={() => setIsCartOpen((isOpen) => !isOpen)}>
              GO TO CHECKOUT
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}

export default CartDropdown;
