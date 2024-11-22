import { Link } from "react-router-dom";
import "./ResponsivePanier.css";

function ResponsivePanier() {
  return (
    <div className="responsive-panier">
      <Link to="/panier">
        <img
          src="/assets/images/shopping-basket_12220215.png"
          width="32"
          height="32"
          alt="panier"
        />
      </Link>
    </div>
  );
}

export default ResponsivePanier;
