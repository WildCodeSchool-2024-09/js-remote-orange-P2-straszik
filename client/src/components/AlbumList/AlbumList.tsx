import AlbumListItem from "./AlbumListItem";
import "./AlbumList.css";

type Album = {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  song: string[];
};

function AlbumList({ albums }: { albums: Album[] }) {
  return (
    <div className="album-list">
      <h1>Album List</h1>
      {albums?.map((album: Album) => (
        <AlbumListItem album={album} key={album.id} />
      ))}
    </div>
  );
}

export default AlbumList;
