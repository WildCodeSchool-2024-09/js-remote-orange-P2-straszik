import { useEffect, useState } from "react";
import "./Boutique.css";
import { usePanier } from "../../contexts/ContextPanier";
interface Goodie {
  id: number;
  nom: string;
  image_url: string;
  prix: number;
}

function Boutique() {
  // Utilisation de useState pour stocker les données
  const [goodies, setGoodies] = useState<Goodie[]>([]);
  const { addPanier } = usePanier();
  // Utilisation de useEffect pour charger les données dès le rendu du composant
  useEffect(() => {
    // Effectuer une requête fetch pour récupérer les données
    fetch("https://api-straszik.vercel.app/items")
      .then((response) => response.json()) // Parse la réponse JSON
      .then((data) => setGoodies(data)) // Mettre à jour l'état avec les données
      .catch((error) =>
        console.error("Erreur de récupération des données:", error),
      );
  }, []); // Le tableau vide signifie que cela ne se produira qu'une seule fois au chargement du composant

  return (
    <div className="main">
      <h1>Boutique</h1>
      <div className="goodies-grid">
        {goodies.length > 0 ? (
          goodies.map((goodie) => (
            <div className="goodie-card" key={goodie.id}>
              <h2>{goodie.nom}</h2>
              {goodie.image_url && (
                <img
                  src={goodie.image_url}
                  alt={goodie.nom}
                  className="goodie-image"
                />
              )}
              <p>{goodie.prix} €</p>
              <button type="button" onClick={() => addPanier(goodie)}>
                Ajouter au panier
              </button>
            </div>
          ))
        ) : (
          <p>Aucun produit disponible.</p>
        )}
      </div>
    </div>
  );
}

export default Boutique;
