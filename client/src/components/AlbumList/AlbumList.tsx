import AlbumListItem from "./AlbumListItem";
import "./AlbumList.css";

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

function AlbumList({ albums }: { albums: Album[] | undefined }) {
  if (!albums || albums.length === 0) {
    return <div>Aucun album disponible.</div>;
  }

  return (
    <div className="album-list">
      {albums.map((album) => (
        <AlbumListItem key={album.id} album={album} />
      ))}
    </div>
  );
}

export default AlbumList;
