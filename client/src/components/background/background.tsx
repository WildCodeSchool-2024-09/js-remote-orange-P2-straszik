import React from 'react';
import './Background.css';

const BackgroundVideo = () => {
    return (
        <div className="video-container">
            <iframe
                className="background-video"
                src="https://www.youtube.com/embed/BtyHYIpykN0?autoplay=1&mute=1&loop=1&playlist=BtyHYIpykN0&controls=0&showinfo=0&modestbranding=1"
                title="YouTube Background Video"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
            ></iframe>
            <div className="content">
                {/* Ajoutez ici le contenu de premier plan */}
            </div>
        </div>
    );
};

export default BackgroundVideo;
