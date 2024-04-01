import { ReactComponent as ShoppingIcon } from "../../assets/004 shopping-bag.svg";
import { useCart } from "../../context/CartContext";

import "./CartIcon.styles.scss";
function CartIcon() {
  const { setIsCartOpen } = useCart();
  const { cartItems } = useCart();
  const cartAmount = cartItems?.reduce((acc, cur) => acc + cur.quantity, 0);
  function toggleIsOpen() {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  }
  return (
    <div className="cart-icon-container" onClick={toggleIsOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartAmount}</span>
    </div>
  );
}

export default CartIcon;
