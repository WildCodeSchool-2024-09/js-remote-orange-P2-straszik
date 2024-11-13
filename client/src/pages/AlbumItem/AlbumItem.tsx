import { useParams } from "react-router-dom";

function AlbumItem() {
    const { id } = useParams();
    return (
        <main className="main">
            <section className="hero">
                <h1>Album Title {id}</h1>
                <p>Album Description</p>
            </section>
            <section className="content">
                <div className="item-rows">
                    <div className="song-title">
                        <p>01</p>
                        <h3>Song Title</h3>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default AlbumItem;