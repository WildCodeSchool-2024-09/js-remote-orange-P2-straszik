import "./AlbumListItem.css";

type Album = {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  song: string[];
};

function AlbumListItem({ album }: { album: Album }) {
  return (
    <div className="album-list-item">
      <img src={album.imgSrc} alt={album.title} />
      <h2 className="album-title">{album.title}</h2>
      <p className="album-description">{album.description}</p>
    </div>
  );
}

export default AlbumListItem;
