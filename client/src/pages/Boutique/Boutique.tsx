import { useEffect, useState } from "react";
import type { FC } from "react";
import { usePanier } from "../../contexts/ContextPanier";
import "./Boutique.css";

interface Goodie {
  id: number;
  nom: string;
  image_url: string;
  prix: number;
  quantite?: number; // Add optional quantite property
}

const Boutique: FC = () => {
  const [goodies, setGoodies] = useState<Goodie[]>([]);
  const { addPanier } = usePanier();

  // Récupérer les données des goodies depuis l'API
  useEffect(() => {
    fetch("https://api-straszik.vercel.app/items")
      .then((res) => res.json())
      .then((data) => setGoodies(data))
      .catch((err) =>
        console.error("Erreur lors du chargement des goodies :", err),
      );
  }, []);

  // Fonction pour ajouter un goodie au panier
  const handleAddToPanier = (goodie: Goodie) => {
    // Ajoute un bon article au panier avec une quantité de 1
    addPanier({ ...goodie, quantite: 1 });
    alert(`${goodie.nom} a été ajouté à votre panier.`);
  };

  return (
    <div className="main">
      <h1>Boutique</h1>
      <div className="goodies-grid">
        {/* Vérifier s'il y a des goodies à afficher */}
        {goodies.length > 0 ? (
          goodies.map((goodie) => (
            <div key={goodie.id} className="goodie-card">
              <h2>{goodie.nom}</h2>
              <div className="goodies-conterImage">
                <img
                  src={goodie.image_url}
                  alt={goodie.nom}
                  className="goodie-image"
                />
              </div>
              <p className="goodie-prix">{goodie.prix.toFixed(2)} €</p>
              <button type="button" onClick={() => handleAddToPanier(goodie)}>
                Ajouter au panier
              </button>
            </div>
          ))
        ) : (
          <p>Chargement des produits...</p>
        )}
      </div>
    </div>
  );
};

export default Boutique;
