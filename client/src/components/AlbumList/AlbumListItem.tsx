import { useEffect, useState } from "react";
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
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null,
  );

  const showMoreSongs = () => {
    setVisibleSongs((prev) =>
      prev + 10 > album.songs.length ? album.songs.length : prev + 10,
    );
  };

  const showLessSongs = () => {
    setVisibleSongs(10);
  };

  const playAudio = (audioSrc: string) => {
    if (currentAudio) {
      currentAudio.pause();
    }

    const newAudio = new Audio(audioSrc);
    setCurrentAudio(newAudio);
    newAudio.play();
  };

  useEffect(() => {
    return () => {
      if (currentAudio) {
        currentAudio.pause();
      }
    };
  }, [currentAudio]);

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
            <span className="album-song-number">{index + 1}</span>
            <p className="album-song-title">{song.title}</p>
            {/* Bouton personnalisé pour jouer la chanson */}
            <button
              type="button"
              className="album-play-button"
              onClick={() => playAudio(song.audioSrc)}
            >
              Play
            </button>
          </div>
        ))}
        <div className="album-song-controls">
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
    </div>
  );
}

export default AlbumListItem;
