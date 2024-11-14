import AlbumListItem from "./AlbumListItem";

type Album = {
    id: number;
    title: string;
    description: string;
    song: string[];
}

function AlbumList({ albums }: { albums: Album[] }) {
    return (
        <div>
            <h1>Album List</h1>
            {albums?.map((album: Album, key: number) => (
                <AlbumListItem album={album} key={key} />
            ))}
        </div>
    );
}

export default AlbumList;