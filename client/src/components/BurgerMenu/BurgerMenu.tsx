import { useState } from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css"; // Assurez-vous que le CSS est bien appliqué

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour ouvrir/fermer le menu
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Inverse l'état de isOpen
  };

  return (
    <div className="burger-menu">
      {/* Bouton burger visible uniquement sur petit écran */}

      <button type="button" className="burger-button" onClick={toggleMenu}>
        ☰
      </button>

      {/* Menu burger visible lorsque 'isOpen' est true */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">
              <strong>Accueil</strong>
            </Link>
          </li>
          <li>
            <Link to="/boutique">
              <strong>Boutique</strong>
            </Link>
          </li>
          <li>
            <Link to="/albums">
              <strong>Albums</strong>
            </Link>
          </li>
          <li>
            <Link to="#">
              <strong>Concerts</strong>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
