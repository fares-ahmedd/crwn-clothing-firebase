import { Link } from "react-router-dom";
import "./Header.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/CrownLogo.svg";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

function Header() {
  const { currentUser } = useContext(UserContext);
  const [openCart, setOpenCart] = useState(false);
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
          <li onClick={() => setOpenCart((cart) => !cart)}>
            <CartIcon />
          </li>
        </ul>
        {openCart && <CartDropdown />}
      </header>
    </>
  );
}

export default Header;
