import type React from "react";
import { useEffect, useRef, useState } from "react";
import "./Background.css";
import "@fontsource/zilla-slab";
// Définition du type Video
type Video = {
  id: string;
  start: number;
  zoom: number;
};

// Liste des vidéos prédéfinies
const videos: Video[] = [
  { id: "BtyHYIpykN0", start: 0, zoom: 1.0 },
  { id: "IOwom_Gp__Q", start: 15, zoom: 1.1 },
  { id: "YdjO4EpEzZw", start: 15, zoom: 1.5 },
  { id: "CEbJwZOkvDM", start: 20, zoom: 1.5 },
  { id: "u8bHjdljyLw", start: 25, zoom: 1.5 },
  { id: "vNpl-M3_9_o", start: 15, zoom: 1.5 },
  { id: "NmweQ43916w", start: 23, zoom: 1.5 },
];

// Fonction pour obtenir une vidéo aléatoire
const getRandomVideo = (): Video => {
  const randomIndex = Math.floor(Math.random() * videos.length);
  return videos[randomIndex];
};

// Initialisation de l'API YouTube
const loadYouTubeAPI = (onReady: () => void) => {
  if (!window.YT) {
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);
    window.onYouTubeIframeAPIReady = onReady;
  } else {
    onReady();
  }
};

const BackgroundVideo: React.FC = () => {
  // États
  const [isMuted, setIsMuted] = useState(true);
  const [video, setVideo] = useState<Video>(getRandomVideo());
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const playerRef = useRef<any>(null);

  // Effet pour initialiser et gérer le lecteur YouTube
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: video.id,
        playerVars: {
          start: video.start,
          modestbranding: 1,
          controls: 0,
          rel: 0,
          showinfo: 0,
          fs: 0,
          iv_load_policy: 3,
        },
        events: {
          onReady: (event: {
            target: {
              playVideo: () => void;
              // biome-ignore lint/suspicious/noExplicitAny: <explanation>
              mute: () => any;
              unMute: () => void;
            };
          }) => {
            event.target.playVideo();
            isMuted ? event.target.mute() : event.target.unMute();
          },
        },
      });
    };

    loadYouTubeAPI(onYouTubeIframeAPIReady);
  }, [video]);

  // Toggle du son
  const toggleMute = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (playerRef.current) {
      isMuted ? playerRef.current.unMute() : playerRef.current.mute();
      setIsMuted(!isMuted);
    }
  };

  // Change la vidéo au hasard
  const changeVideo = () => {
    setVideo(getRandomVideo());
  };

  return (
    <div className="video-container">
      <div
        id="youtube-player"
        className="background-video"
        style={{ transform: `translate(-50%, -50%) scale(${video.zoom})` }}
      />
      <button type="button" className="mute-button" onClick={toggleMute}>
        {isMuted ? "🔇" : "🔊"}
      </button>
      <button
        type="button"
        className="change-video-button"
        onClick={changeVideo}
      >
        🎲
      </button>
      <div className="content" />
    </div>
  );
};

export default BackgroundVideo;
