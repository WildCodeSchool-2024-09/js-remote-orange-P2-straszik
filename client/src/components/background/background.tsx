import React, { useState, useEffect } from "react";
import "./Background.css";

const getRandomVideo = () => {
    const videos = [
        { id: "BtyHYIpykN0", start: 0 },
        { id: "IOwom_Gp__Q", start: 15 },
        { id: "YdjO4EpEzZw", start: 15 },
        { id: "CEbJwZOkvDM", start: 20 }
    ];
    const randomIndex = Math.floor(Math.random() * videos.length);
    return videos[randomIndex];
};

const BackgroundVideo = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [videoId, setVideoId] = useState<string>(getRandomVideo().id);
    const [startTime, setStartTime] = useState<number>(getRandomVideo().start);
    const [player, setPlayer] = useState<any>(null);

    useEffect(() => {
        const onYouTubeIframeAPIReady = () => {
            const newPlayer = new window.YT.Player("youtube-player", {
                videoId: videoId,
                playerVars: {
                    start: startTime,  // Début de la vidéo à partir de la seconde spécifiée
                },
                events: {
                    onReady: (event: any) => {
                        const youtubePlayer = event.target;
                        setPlayer(youtubePlayer);
                        youtubePlayer.playVideo();
                        if (isMuted) {
                            youtubePlayer.mute();
                        } else {
                            youtubePlayer.unMute();
                        }
                    }
                }
            });
        };

        if (!window.YT) {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
        } else {
            onYouTubeIframeAPIReady();
        }
    }, [videoId, startTime]);

    const toggleMute = () => {
        if (player) {
            if (isMuted) {
                player.unMute();
            } else {
                player.mute();
            }
            setIsMuted(!isMuted);
        }
    };

    const changeVideo = () => {
        const randomVideo = getRandomVideo();
        setVideoId(randomVideo.id);
        setStartTime(randomVideo.start);
    };

    return (
        <div className="video-container">
            <div id="youtube-player" className="background-video"></div>
            <button className="mute-button" onClick={toggleMute}>
                {isMuted ? "🔇" : "🔊"}
            </button>
            <button className="change-video-button" onClick={changeVideo}>
                Changer la vidéo
            </button>
            <div className="content"></div>
        </div>
    );
};

export default BackgroundVideo;
