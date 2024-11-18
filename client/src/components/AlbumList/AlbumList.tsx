import AlbumListItem from "./AlbumListItem";
import "./AlbumList.css";

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

function AlbumList({ albums }: { albums: Album[] }) {
  return (
    <div className="album-list">
      {albums?.map((album: Album) => (
        <AlbumListItem album={album} key={album.id} />
      ))}
    </div>
  );
}

export default AlbumList;
