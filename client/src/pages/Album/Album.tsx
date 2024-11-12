// pages/Albums.js
import React, { useState } from 'react';
import './album.css';
import { Link } from 'react-router-dom';

function Albums() {
    const albumCovers = [
        {
            id: 1,
            src: '/path/to/album1.png',
            title: "Album 1"
        },

        {
            id: 2,
            src: '/path/to/album2.png',
            title: "Album 2"
        },

        {
            id: 3,
            src: '/path/to/album3.png',
            title: "Album 3"
        },

        {
            id: 4,
            src: '/path/to/album4.png',
            title: "Album 4"
        },

    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % albumCovers.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + albumCovers.length) % albumCovers.length);
    };

    return (
        <div className="albums-container">

            <div className="carousel">
                <button onClick={prevSlide} className="carousel-button prev">
                    &lt;
                </button>

                <div className="carousel-track">
                    {albumCovers.map((cover, index) => (
                        <div
                            key={cover.id}
                            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                        >
                            <img src={cover.src} alt={cover.title} className="album-cover" />
                            <p>{cover.title}</p>
                            <Link to={`/album/${cover.id}`}>View Album</Link>
                        </div>
                    ))}
                </div>

                <button onClick={nextSlide} className="carousel-button next">
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default Albums;
