import { useEffect, useState } from "react";
import type { FC } from "react";
import { usePanier } from "../../contexts/ContextPanier";
import "./Boutique.css";

interface Goodie {
  id: number;
  nom: string;
  image_url: string;
  prix: number;
  quantite: number;
}

const Boutique: FC = () => {
  const [goodies, setGoodies] = useState<Goodie[]>([]);
  const { addPanier } = usePanier();

  useEffect(() => {
    fetch("https://api-straszik.vercel.app/items")
      .then((res) => res.json())
      .then((data) => setGoodies(data))
      .catch((err) =>
        console.error("Erreur lors du chargement des goodies :", err),
      );
  }, []);

  const handleAddToPanier = (goodie: Goodie) => {
    addPanier({ ...goodie, quantite: 1 });
    alert(`${goodie.nom} a été ajouté à votre panier.`);
  };

  return (
    <div className="main">
      <h1>Boutique</h1>
      <div className="goodies-grid">
        {goodies.map((goodie) => (
          <div key={goodie.id} className="goodie-card">
            <h2>{goodie.nom}</h2>
            <img
              src={goodie.image_url}
              alt={goodie.nom}
              className="goodie-image"
            />
            <p>{goodie.prix.toFixed(2)} €</p>
            <button type="button" onClick={() => handleAddToPanier(goodie)}>
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boutique;
