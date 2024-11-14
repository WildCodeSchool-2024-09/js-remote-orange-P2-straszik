type Album = {
  id: number;
  title: string;
  description: string;
  song: string[];
};

function AlbumListItem({ album }: { album: Album }) {
  return (
    <div>
      <h2>{album.title}</h2>
      <p>{album.description}</p>
    </div>
  );
}

export default AlbumListItem;
