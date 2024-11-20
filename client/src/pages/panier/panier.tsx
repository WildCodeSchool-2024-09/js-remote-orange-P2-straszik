import React, { useEffect, useState } from 'react';
import './panier.css';

function Panier() {
  const [items, setItems] = useState([]);

  // Charger les données depuis le localStorage au premier rendu
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('panier')) || [];
    setItems(storedItems);
  }, []);

  // Sauvegarder le panier dans l'état et le localStorage
  const sauvegarderPanier = (nouveauPanier) => {
    setItems(nouveauPanier); // Met à jour l'état React
    localStorage.setItem('panier', JSON.stringify(nouveauPanier)); // Met à jour le localStorage
  };

  // Mettre à jour la quantité
  const mettreAJourQuantite = (index, nouvelleQuantite) => {
    const nouveauPanier = [...items];
    if (nouvelleQuantite <= 0) {
      nouveauPanier.splice(index, 1);
    } else {
      nouveauPanier[index].quantite = nouvelleQuantite;
    }
    sauvegarderPanier(nouveauPanier);
  };

  // Supprimer un article
  const supprimerArticle = (index) => {
    const nouveauPanier = items.filter((_, i) => i !== index);
    sauvegarderPanier(nouveauPanier);
  };

  // Ajouter un nouvel article
  const ajouterAuPanier = (nouvelArticle) => {
    const panierActuel = [...items];
    const indexExistant = panierActuel.findIndex(item => item.id === nouvelArticle.id);

    if (indexExistant !== -1) {
      panierActuel[indexExistant].quantite += nouvelArticle.quantite;
    } else {
      panierActuel.push(nouvelArticle);
    }
    sauvegarderPanier(panierActuel);
  };

  // Calculer le total
  const calculerTotal = () => {
    return items.reduce((total, item) => total + item.prix * item.quantite, 0).toFixed(2);
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
              <div key={index} className="panier-item">
                <img className="image-produit" src={item.image_url} alt={item.nom} />
                <div>
                  <h3>{item.nom}</h3>
                  <p>Prix : {item.prix} €</p>
                  <div className="quantite-control">
                    <button onClick={() => mettreAJourQuantite(index, item.quantite - 1)}>-</button>
                    <span>Quantité : {item.quantite}</span>
                    <button onClick={() => mettreAJourQuantite(index, item.quantite + 1)}>+</button>
                  </div>
                  <button className="supprimer-btn" onClick={() => supprimerArticle(item.id)}>
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
