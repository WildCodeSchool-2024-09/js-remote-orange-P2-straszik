import React, { useState, useEffect, useRef } from "react";
import "./Background.css";

type Video = {
  id: string;
  start: number;
  zoom: number;
};

const getRandomVideo = (): Video => {
  const videos: Video[] = [
    { id: "BtyHYIpykN0", start: 0, zoom: 1.0 },
    { id: "IOwom_Gp__Q", start: 15, zoom: 1.1 },
    { id: "YdjO4EpEzZw", start: 15, zoom: 1.9 },
    { id: "CEbJwZOkvDM", start: 20, zoom: 1.1 },
  ];
  const randomIndex = Math.floor(Math.random() * videos.length);
  return videos[randomIndex];
};

const BackgroundVideo: React.FC = () => {
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [videoId, setVideoId] = useState<string>(getRandomVideo().id);
  const [startTime, setStartTime] = useState<number>(getRandomVideo().start);
  const [zoom, setZoom] = useState<number>(getRandomVideo().zoom);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const onYouTubeIframeAPIReady = () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }

      playerRef.current = new window.YT.Player("youtube-player", {
        videoId,
        playerVars: {
          start: startTime,
          modestbranding: 1,
          controls: 0,
          rel: 0,
          showinfo: 0,
          fs: 0,
          iv_load_policy: 3,
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
            isMuted ? event.target.mute() : event.target.unMute();
          },
        },
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

  const toggleMute = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  const changeVideo = (): void => {
    const randomVideo = getRandomVideo();
    setVideoId(randomVideo.id);
    setStartTime(randomVideo.start);
    setZoom(randomVideo.zoom);
  };

  return (
    <div className="video-container">
      <div
        id="youtube-player"
        className="background-video"
        style={{ transform: `translate(-50%, -50%) scale(${zoom})` }}
      />
      <button type="button" className="mute-button" onClick={toggleMute}>
        {isMuted ? "🔇" : "🔊"}
      </button>
      <button type="button" className="change-video-button" onClick={changeVideo}>
        🍥
      </button>
      <div className="content"></div>
    </div>
  );
};

export default BackgroundVideo;
