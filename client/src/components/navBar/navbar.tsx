import { Link } from "react-router-dom";
import "./navbar.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import ResponsivePanier from "../ResponsivePanier/ResponsivePanier";
function Navbar() {
  return (
    <div className="navbar">
      <BurgerMenu />
      <ResponsivePanier />

      <nav className="nav1">
        <ul>
          <li>
            <Link to="/">
              <p>
                <strong>Accueil</strong>
              </p>
            </Link>
          </li>
          <li>
            <Link to="/Boutique">
              <p>
                <strong>Boutique</strong>
              </p>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="logo">
        <img src="/assets/images/Logo_PNL.png" alt="Logo PNL" />
      </div>

      <nav className="nav2">
        <ul>
          <li>
            <Link to="/Concerts">
              <strong>Concerts</strong>
            </Link>
          </li>
          <li>
            <Link to="/Albums">
              <strong>Albums</strong>
            </Link>
          </li>
          <li>
            <Link to="/panier">
              <img
                src="\assets\images\shopping-basket_12220215.png"
                width="32"
                height="32"
                alt="panier"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
