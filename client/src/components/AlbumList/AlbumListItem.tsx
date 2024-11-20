import { useRef, useState } from "react";
import "./AlbumListItem.css";

type Song = {
  id: number;
  title: string;
  audioSrc: string;
};

type Album = {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  songs: Song[];
};

function AlbumListItem({ album }: { album: Album }) {
  const [visibleSongs, setVisibleSongs] = useState(10);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const showMoreSongs = () => {
    setVisibleSongs((prev) =>
      prev + 10 > album.songs.length ? album.songs.length : prev + 10,
    );
  };

  const showLessSongs = () => {
    setVisibleSongs(10);
  };

  const handlePlay = (songId: number) => {
    const audioElement = audioRefs.current[songId];
    if (audioElement) {
      if (audioElement.paused) {
        audioElement.play();
        setIsPlaying(songId);
      } else {
        audioElement.pause();
        setIsPlaying(null);
      }
    }
  };

  const handleAudioRef = (el: HTMLAudioElement | null, songId: number) => {
    audioRefs.current[songId] = el;
  };

  return (
    <div className="album-list-item">
      <div className="album-info">
        <img className="album-img" src={album.imgSrc} alt={album.title} />
        <h2 className="album-title">{album.title}</h2>
        <p className="album-description">{album.description}</p>
      </div>

      <div className="album-song-list">
        {album.songs.slice(0, visibleSongs).map((song, index) => (
          <div className="album-song-item" key={song.id}>
            <span className="album-song-number">{index + 1}</span>
            <p className="album-song-title">{song.title}</p>
            <button
              type="button"
              className="album-play-btn"
              onClick={() => handlePlay(song.id)}
            >
              {isPlaying === song.id ? "Pause" : "Play"}
            </button>
            <audio
              ref={(el) => handleAudioRef(el, song.id)}
              src={song.audioSrc}
              preload="metadata"
            >
              <track kind="captions" />
            </audio>
          </div>
        ))}
        {visibleSongs < album.songs.length ? (
          <button
            type="button"
            className="album-show-more"
            onClick={showMoreSongs}
          >
            Afficher plus
          </button>
        ) : (
          <button
            type="button"
            className="album-show-less"
            onClick={showLessSongs}
          >
            Afficher moins
          </button>
        )}
      </div>
    </div>
  );
}

export default AlbumListItem;
