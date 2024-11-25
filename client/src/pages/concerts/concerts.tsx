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
    date: "2024-12-01",
    venue: "Stade de France",
    city: "Paris",
    price: 50,
  },
  { id: 22, date: "2024-12-03", venue: "Bercy", city: "Paris", price: 45 },
  {
    id: 23,
    date: "2024-12-05",
    venue: "Le Zenith",
    city: "Toulouse",
    price: 40,
  },
  {
    id: 24,
    date: "2024-12-07",
    venue: "Accor Arena",
    city: "Paris",
    price: 55,
  },
  {
    id: 25,
    date: "2024-12-09",
    venue: "Parc des Princes",
    city: "Paris",
    price: 60,
  },
  {
    id: 26,
    date: "2024-12-11",
    venue: "Stade Pierre-Mauroy",
    city: "Lille",
    price: 35,
  },
  {
    id: 27,
    date: "2024-12-13",
    venue: "Le Dôme",
    city: "Marseille",
    price: 50,
  },
  { id: 28, date: "2024-12-15", venue: "Le Trianon", city: "Paris", price: 45 },
  {
    id: 29,
    date: "2024-12-17",
    venue: "Halle Tony Garnier",
    city: "Lyon",
    price: 40,
  },
  { id: 30, date: "2024-12-19", venue: "Grand Rex", city: "Paris", price: 50 },
  {
    id: 31,
    date: "2024-12-21",
    venue: "Stade Joseph Giaccobetti",
    city: "Antisanti",
    price: 30,
  },
  {
    id: 32,
    date: "2024-12-23",
    venue: "Stade municipal de Baillif",
    city: "Baillif",
    price: 35,
  },
  { id: 33, date: "2024-12-25", venue: "Sarcelle", city: "Paris", price: 40 },
  {
    id: 34,
    date: "2024-12-27",
    venue: "La Roche-sur-Yon",
    city: "Vendée",
    price: 30,
  },
];

function Concerts() {
  const { addPanier } = usePanier();

  // Tri des concerts par date croissante
  const sortedConcerts = [...concertsArray].sort((a, b) =>
    a.date > b.date ? 1 : -1,
  );

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
              <div className="concert-item">{concert.date}</div>
              <div className="concert-item">
                {concert.venue}, {concert.city}
              </div>
              <div className="concert-item">{concert.price} €</div>
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
        {visibleConcerts === sortedConcerts.length ? "Réduire" : "Ajouter plus"}
      </button>
    </div>
  );
}

export default Concerts;
