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
  return (
    <div className="album-list-item" key={album.id}>
      <div className="album-info">
        <img className="album-img" src={album.imgSrc} alt={album.title} />
        <h2 className="album-title">{album.title}</h2>
        <p className="album-description">{album.description}</p>
      </div>
      <div className="album-song-list">
        {album.songs.map((song) => (
          <div className="album-song-item" key={song.id}>
            <div className="album-song-info">
              <p>{song.title}</p>
              {song.audioSrc ? (
                <audio className="album-song-audio" controls>
                  <source src={song.audioSrc} type="audio/mp3" />
                  Votre navigateur ne prend pas en charge l'élément audio.
                </audio>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumListItem;
