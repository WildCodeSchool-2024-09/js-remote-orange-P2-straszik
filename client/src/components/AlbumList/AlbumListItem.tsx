import { useState } from "react";
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

  const showMoreSongs = () => {
    setVisibleSongs((prev) => (prev + 10 > album.songs.length ? album.songs.length : prev + 10));
  };

  const showLessSongs = () => {
    setVisibleSongs(10);
  };

  return (
    <div className="album-list-item" key={album.id}>
      <div className="album-info">
        <img className="album-img" src={album.imgSrc} alt={album.title} />
        <h2 className="album-title">{album.title}</h2>
        <p className="album-description">{album.description}</p>
      </div>
      <div className="album-song-list">
        {album.songs.slice(0, visibleSongs).map((song) => (
          <div className="album-song-item" key={song.id}>
            <div className="album-song-info">
              <p className="album-song-title">{song.title}</p>
              {song.audioSrc ? (
                <audio className="album-song-audio" controls>
                  <source src={song.audioSrc} type="audio/mp3" />
                  <track kind="captions" />
                  Votre navigateur ne prend pas en charge l'élément audio.
                </audio>
              ) : null}
            </div>
          </div>
        ))}
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
