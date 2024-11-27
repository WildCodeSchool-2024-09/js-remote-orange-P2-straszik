import { useState } from "react";
import { usePanier } from "../../contexts/ContextPanier";
import "./Concerts.css";

type Concerts = {
  id: number;
  date: string;
  venue: string;
  city: string;
  price: number;
};

const concertsArray: Concerts[] = [
  {
    id: 21,
    date: "Dim, 1 Déc 2024",
    venue: "Stade de France",
    city: "Paris",
    price: 50,
  },
  {
    id: 22,
    date: "Mar, 3 Déc 2024",
    venue: "Bercy",
    city: "Paris",
    price: 45,
  },
  {
    id: 23,
    date: "Jeu, 5 Déc 2024",
    venue: "Le Zenith",
    city: "Toulouse",
    price: 40,
  },
  {
    id: 24,
    date: "Sam, 7 Déc 2024",
    venue: "Accor Arena",
    city: "Paris",
    price: 55,
  },
  {
    id: 25,
    date: "Lun, 9 Déc 2024",
    venue: "Parc des Princes",
    city: "Paris",
    price: 60,
  },
  {
    id: 26,
    date: "Mer, 11 Déc 2024",
    venue: "Stade Pierre-Mauroy",
    city: "Lille",
    price: 35,
  },
  {
    id: 27,
    date: "Ven, 13 Déc 2024",
    venue: "Le Dôme",
    city: "Marseille",
    price: 50,
  },
  {
    id: 28,
    date: "Dim, 15 Déc 2024",
    venue: "Le Trianon",
    city: "Paris",
    price: 45,
  },
  {
    id: 29,
    date: "Mar, 17 Déc 2024",
    venue: "Halle Tony Garnier",
    city: "Lyon",
    price: 40,
  },
  {
    id: 30,
    date: "Jeu, 19 Déc 2024",
    venue: "Grand Rex",
    city: "Paris",
    price: 50,
  },
  {
    id: 31,
    date: "Sam, 21 Déc 2024",
    venue: "Stade J Giaccobetti",
    city: "Antisanti",
    price: 30,
  },
  {
    id: 32,
    date: "Lun, 23 Déc 2024",
    venue: "Stade mun' de Baillif",
    city: "Baillif",
    price: 35,
  },
  {
    id: 33,
    date: "Mer, 25 Déc 2024",
    venue: "Sarcelle",
    city: "Paris",
    price: 40,
  },
  {
    id: 34,
    date: "Ven, 27 Déc 2024",
    venue: "La Roche-sur-Yon",
    city: "Vendée",
    price: 30,
  },
];

function Concerts() {
  const { addPanier } = usePanier();
  // Tri des concerts par date croissante
  const sortedConcerts = [...concertsArray].sort((a, b) => {
    // Enlever le jour de la semaine et convertir en objet Date
    const dateA = new Date(a.date.slice(a.date.indexOf(",") + 2));
    const dateB = new Date(b.date.slice(b.date.indexOf(",") + 2));
    return dateA.getTime() - dateB.getTime();
  });

  // État pour savoir combien de concerts afficher
  const [visibleConcerts, setVisibleConcerts] = useState(5);

  // Fonction pour ajouter un concert au panier
  const handleAddToCart = (concert: Concerts) => {
    addPanier({
      id: concert.id,
      nom: `${concert.venue}, ${concert.city}`,
      prix: concert.price,
      quantite: 1,
      image_url:
        "https://startitkbs.org/wp-content/uploads/2021/03/pnl-concert.jpg",
    });

    // Alerte après ajout
    alert(
      `Votre ticket pour le concert à ${concert.venue}, ${concert.city} le ${concert.date} a été ajouté au panier pour ${concert.price} € ! 🎉`,
    );
  };

  // Fonction pour afficher plus ou moins de concerts
  const toggleConcerts = () => {
    if (visibleConcerts === sortedConcerts.length) {
      setVisibleConcerts(5); // Réduire à 5 concerts
    } else {
      setVisibleConcerts(sortedConcerts.length); // Afficher tous les concerts
    }
  };

  return (
    <div className="concerts-container">
      <div className="h1-Wave">
        <h1 className="concerts-title">Concerts</h1>
        <img
          className="concerts-wave"
          src="./assets/images/Wave.png"
          alt="Wave"
        />
      </div>
      <h2 className="concerts-subtitle">
        Venez rencontrer Ademo, N.O.S et leur équipe en personne lors d’un live
        près de chez vous ! 💪
      </h2>

      <div className="concerts-list">
        {sortedConcerts.slice(0, visibleConcerts).map((concert) => (
          <div key={concert.id} className="concert-card">
            <div className="concert-info">
              <div className="concert-date">{concert.date}</div>
              <div className="concert-city">
                {concert.venue}, {concert.city}
                <div className="concert-prix">{concert.price} €</div>
              </div>
            </div>
            <button
              type="button"
              className="concert-button"
              onClick={() => handleAddToCart(concert)}
            >
              Acheter le ticket
            </button>
          </div>
        ))}
      </div>

      {/* Bouton Ajouter plus ou Réduire */}
      <button
        type="button"
        className="add-more-button"
        onClick={toggleConcerts}
      >
        {visibleConcerts === sortedConcerts.length ? "Réduire" : "Voir plus"}
      </button>
    </div>
  );
}

export default Concerts;
