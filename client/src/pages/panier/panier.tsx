import { useEffect, useState } from "react";
import "./panier.css";
import { usePanier } from "../../contexts/ContextPanier"; // Assurez-vous que usePanier est correctement importé

interface Item {
  id: number;
  nom: string;
  prix: number;
  quantite: number;
  image_url: string;
}

function Panier() {
  const [items, setItems] = useState<Item[]>([]);
  const { updateQuantite } = usePanier(); // Utilisation du contexte pour updateQuantite

  // Charger les données depuis le localStorage au premier rendu
  useEffect(() => {
    const storedItems: Item[] = JSON.parse(
      localStorage.getItem("panier") || "[]"
    );
    setItems(storedItems);
    console.log("Produits chargés depuis le localStorage :", storedItems);
  }, []);

  // Sauvegarder le panier dans l'état et le localStorage
  const sauvegarderPanier = (nouveauPanier: Item[]) => {
    setItems(nouveauPanier); // Met à jour l'état React
    localStorage.setItem("panier", JSON.stringify(nouveauPanier));
    console.log("Panier sauvegardé dans le localStorage :", nouveauPanier); // Met à jour le localStorage
  };

  // Mettre à jour la quantité et enregistrer dans localStorage
  const mettreAJourQuantite = (index: number, nouvelleQuantite: number) => {
    if (nouvelleQuantite <= 0) {
      supprimerArticle(items[index].id); // Si la quantité est inférieure ou égale à 0, supprimer l'article
    } else {
      const nouveauPanier = [...items];
      nouveauPanier[index].quantite = nouvelleQuantite;
      sauvegarderPanier(nouveauPanier); // Sauvegarde dans le localStorage et l'état
    }
  };

  // Supprimer un article et rafraîchir la page
  const supprimerArticle = (id: number) => {
    const nouveauPanier = items.filter((item) => item.id !== id);
    sauvegarderPanier(nouveauPanier);
    console.log("Panier après suppression :", JSON.parse(localStorage.getItem("panier") || "[]")); // Met à jour le panier dans localStorage
    
    // Rafraîchissement de la page après suppression
    window.location.reload();
  };

  // Calculer le total
  const calculerTotal = () => {
    return items
      .reduce((total, item) => total + item.prix * item.quantite, 0)
      .toFixed(2);
  };

  return (
    <div className="panier-container">
      <h1>Mon Panier</h1>

      {items.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          <div className="panier-items">
            {items.map((item, index) => (
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
                      onClick={() =>
                        mettreAJourQuantite(index, item.quantite - 1)
                      }
                    >
                      -
                    </button>
                    <span>Quantité : {item.quantite}</span>
                    <button
                      type="button"
                      onClick={() =>
                        mettreAJourQuantite(index, item.quantite + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="supprimer-btn"
                    onClick={() => supprimerArticle(item.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="panier-total">
            <h2>Total : {calculerTotal()} €</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Panier;
