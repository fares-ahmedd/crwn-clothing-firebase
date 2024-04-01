import { Link } from "react-router-dom";
import "./Header.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/CrownLogo.svg";

function Header() {
  return (
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
          <Link className="nav-link" to={"/auth"}>
            Sign in
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
