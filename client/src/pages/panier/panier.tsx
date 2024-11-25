import "./panier.css";
import { usePanier } from "../../contexts/ContextPanier";

function Panier() {
  // Récupération du contexte du panier
  const { panier, updateQuantite, supprimerItem, calculerTotal } = usePanier();

  return (
    <div className="panier-container">
      <h1>Mon Panier</h1>

      {panier.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div className="grid-container">
          <div className="panier-items">
            {panier.map((item) => (
              <div key={item.id} className="panier-item">
                <img
                  className="image-produit"
                  src={item.image_url}
                  alt={item.nom}
                />
                <div>
                  <h3>{item.nom}</h3>
                  <p>Prix : {item.prix} €</p>
                  <div className="quantite-control">
                    <button
                      type="button"
                      onClick={() => updateQuantite(item.id, item.quantite - 1)}
                    >
                      -
                    </button>
                    <span>Quantité : {item.quantite}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantite(item.id, item.quantite + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="supprimer-btn"
                    onClick={() => supprimerItem(item.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="panier-total">
            <h2>Total : {calculerTotal().toFixed(2)} €</h2>
          </div>
          <button type="button" className="valider-btn">
            Valider
          </button>
        </div>
      )}
    </div>
  );
}

export default Panier;
