import { useState, useRef } from "react";
import "./AlbumListItem.css";

type Album = {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  songs: Song[];
};

type Song = {
  id: number;
  title: string;
  audioSrc: string;
};

function AlbumListItem({ album }: { album: Album }) {
  const [visibleSongs, setVisibleSongs] = useState(10);
  const [isPlaying, setIsPlaying] = useState<number | null>(null); // ID de la chanson en cours de lecture
  const [isMuted, setIsMuted] = useState<boolean>(false); // État de sourdine
  const [currentTime, setCurrentTime] = useState<number>(0); // Temps de lecture actuel
  const [duration, setDuration] = useState<number>(0); // Durée totale de la chanson
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]); // Référence à tous les éléments audio

  const showMoreSongs = () => {
    setVisibleSongs((prev) => (prev + 10 > album.songs.length ? album.songs.length : prev + 10));
  };

  const showLessSongs = () => {
    setVisibleSongs(10);
  };

  const handlePlay = (songId: number) => {
    const audioElement = audioRefs.current[songId];
    if (audioElement) {
      if (audioElement.paused) {
        audioElement.play();
        setIsPlaying(songId); // Démarrer la chanson
      } else {
        audioElement.pause();
        setIsPlaying(null); // Arrêter la chanson
      }
    }
  };

  const handleMute = (songId: number) => {
    const audioElement = audioRefs.current[songId];
    if (audioElement) {
      audioElement.muted = !audioElement.muted;
      setIsMuted(audioElement.muted); // Mettre en sourdine
    }
  };

  const handleTimeUpdate = (songId: number) => {
    const audioElement = audioRefs.current[songId];
    if (audioElement) {
      setCurrentTime(audioElement.currentTime);
      setDuration(audioElement.duration);
    }
  };

  return (
    <div className="album-list-item" key={album.id}>
      <div className="album-info">
        <img className="album-img" src={album.imgSrc} alt={album.title} />
        <h2 className="album-title">{album.title}</h2>
        <p className="album-description">{album.description}</p>
      </div>

      <div className="album-song-list">
        {album.songs.slice(0, visibleSongs).map((song, index) => (
          <div className="album-song-item" key={song.id}>
            <div className="album-song-info">
              {/* Affichage du numéro de la chanson */}
              <p className="album-song-number">{index + 1}</p>

              {/* Boutons Play et Mute, ainsi que la barre de progression */}
              <button
                className="album-play-btn"
                onClick={() => handlePlay(song.id)}
              >
                {isPlaying === song.id ? "Pause" : "Play"}
              </button>
              <button
                className="album-mute-btn"
                onClick={() => handleMute(song.id)}
              >
                {isMuted ? "Unmute" : "Mute"}
              </button>
              <audio
                className="album-song-audio"
                ref={(el) => (audioRefs.current[song.id] = el)}
                controls
                onTimeUpdate={() => handleTimeUpdate(song.id)}
              >
                <source src={song.audioSrc} type="audio/mp3" />
                <track kind="captions" />
                Votre navigateur ne prend pas en charge l'élément audio.
              </audio>

              {/* Barre de progression */}
              <input
                type="range"
                className="album-audio-bar"
                value={(currentTime / duration) * 100 || 0}
                onChange={(e) => {
                  const audioElement = audioRefs.current[song.id];
                  if (audioElement) {
                    audioElement.currentTime = (parseFloat(e.target.value) / 100) * duration;
                  }
                }}
              />
            </div>
          </div>
        ))}

        {/* Contrôles pour afficher plus ou moins de chansons */}
        <div className="album-song-controls">
          {visibleSongs < album.songs.length ? (
            <button className="album-show-more" onClick={showMoreSongs}>
              Afficher plus
            </button>
          ) : (
            <button className="album-show-less" onClick={showLessSongs}>
              Afficher moins
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AlbumListItem;
