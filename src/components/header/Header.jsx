import { Link } from "react-router-dom";
import "./Header.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/CrownLogo.svg";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { useCart } from "../../context/CartContext";

function Header() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useCart();
  async function signOutHandler() {
    try {
      await signOutUser();
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <header className="navigation">
        <Link className="logo-container" to={"/"}>
          <CrwnLogo className="logo" />
        </Link>
        <ul className="nav-links-container">
          <li>
            <Link className="nav-link" to={"/shop"}>
              Shop
            </Link>
          </li>
          <li>
            {currentUser ? (
              <span className="nav-link" onClick={signOutHandler}>
                SIGN OUT
              </span>
            ) : (
              <Link className="nav-link" to={"/auth"}>
                Sign in
              </Link>
            )}
          </li>
          <li className="cart-icon">
            <CartIcon />
          </li>
        </ul>
        {isCartOpen && <CartDropdown />}
      </header>
    </>
  );
}

export default Header;
