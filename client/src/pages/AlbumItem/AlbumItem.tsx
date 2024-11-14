import { useParams } from "react-router-dom";
import "./AlbumItem.css";
import AlbumList from "../../components/AlbumList/AlbumList";

const albums = [
  {
    id: 1,
    title: "Album PNL Test",
    imgSrc: "",
    description: "Description de l'album 1",
    song: [
      {
        id: 1,
        title: "Song 1",
        description: "Description de la chanson 1",
      },
      {
        id: 2,
        title: "Song 2",
        description: "Description de la chanson 2",
      },
      {
        id: 3,
        title: "Song 3",
        description: "Description de la chanson 3",
      },
    ],
  },
  {
    id: 2,
    title: "Album 2",
    description: "Description de l'album 2",
    song: [
      {
        id: 1,
        title: "Song 1",
        description: "Description de la chanson 1",
      },
      {
        id: 2,
        title: "Song 2",
        description: "Description de la chanson 2",
      },
      {
        id: 3,
        title: "Song 3",
        description: "Description de la chanson 3",
      },
    ],
  },
  {
    id: 3,
    title: "Album 3",
    description: "Description de l'album 3",
    song: [
      {
        id: 1,
        title: "Song 1",
        description: "Description de la chanson 1",
      },
      {
        id: 2,
        title: "Song 2",
        description: "Description de la chanson 2",
      },
    ],
  },
  {
    id: 4,
    title: "Album 4",
    description: "Description de l'album 4",
    song: [
      {
        id: 1,
        title: "Song 1",
        description: "Description de la chanson 1",
      },
      {
        id: 2,
        title: "Song 2",
        description: "Description de la chanson 2",
      },
    ],
  },
];

function AlbumItem() {
  const { id } = useParams();
  const album = albums.find((album) => album.id === Number.parseInt(id || "0"));

  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <div className="backgroundalbum">
      <h1>{album.title}</h1>
      <p>{album.description}</p>
      <AlbumList
        albums={[
          {
            ...album,
            song: album.song.map((song) => song.title),
          },
        ]}
      />
    </div>
  );
}

export default AlbumItem;
