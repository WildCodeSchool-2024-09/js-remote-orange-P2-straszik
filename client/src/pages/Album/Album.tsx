
import { useState } from "react";

import "./album.css";
import { Link } from "react-router-dom";

function Albums() {
  const albumCovers = [
    {
      id: 1,
      src: "https://m.media-amazon.com/images/I/51aNO1PUtfL._UXNaN_FMjpg_QL85_.jpg",

      title: "Que La Famille",

    },
    {
      id: 2,
      src: "https://cdns-images.dzcdn.net/images/cover/3c0d34f7576d81c8f269570d9806fb88/500x500.jpg",

      title: "Le Monde Chico",

    },
    {
      id: 3,
      src: "https://m.media-amazon.com/images/I/71dFTmV2jgL._UF1000,1000_QL80_.jpg",
      title: "Dans la legende ",

    },
    {
      id: 4,
      src: "https://i.scdn.co/image/ab67616d0000b2736c3966c4dd0eb2273696fe16",
      title: "Deux fréres",

    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % albumCovers.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + albumCovers.length) % albumCovers.length,
    );

  return (
    <div className="albums-container">
      <div className="carousel">
        <button onClick={prevSlide} className="carousel-button prev">
          &lt;
        </button>

        <div className="carousel-track">
          {albumCovers.map((cover, index) => {
            let className = "carousel-slide";

            if (index === currentIndex) {
              className += " active";
            } else if (
              index ===
              (currentIndex - 1 + albumCovers.length) % albumCovers.length
            ) {
              className += " previous";
            } else if (index === (currentIndex + 1) % albumCovers.length) {
              className += " next";
            }

            return (
              <div key={cover.id} className={className}>
                <Link to={`/album/${cover.id}`}>
                  <img src={cover.src} alt={`Cover ${index}`} />
                </Link>
              </div>
            );
          })}
        </div>

        <button onClick={nextSlide} className="carousel-button next">
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Albums;
