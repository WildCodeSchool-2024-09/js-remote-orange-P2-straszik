import { useRef, useState } from "react";
import "./AlbumListItem.css";

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

function AlbumListItem({ album }: { album: Album }) {
  const [visibleSongs, setVisibleSongs] = useState(9);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const [songStates, setSongStates] = useState<{
    [key: number]: { volume: number; isMuted: boolean };
  }>({});

  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const showMoreSongs = () => {
    setVisibleSongs((prev) =>
      prev + 9 > album.songs.length ? album.songs.length : prev + 9,
    );
  };

  const showLessSongs = () => {
    setVisibleSongs(9);
  };

  const handlePlay = (songId: number) => {
    const audioElement = audioRefs.current[songId];
    if (audioElement) {
      if (audioElement.paused) {
        audioElement.play();
        setIsPlaying(songId);
      } else {
        audioElement.pause();
        setIsPlaying(null);
      }
    }
  };

  const handleVolumeChange = (songId: number, value: number) => {
    const audioElement = audioRefs.current[songId];
    if (audioElement) {
      audioElement.volume = value;
    }
    setSongStates((prev) => ({
      ...prev,
      [songId]: { ...prev[songId], volume: value, isMuted: value === 0 },
    }));
  };

  const toggleMute = (songId: number) => {
    const audioElement = audioRefs.current[songId];
    if (audioElement) {
      const isCurrentlyMuted = songStates[songId]?.isMuted ?? false;
      audioElement.muted = !isCurrentlyMuted;
      setSongStates((prev) => ({
        ...prev,
        [songId]: { ...prev[songId], isMuted: !isCurrentlyMuted },
      }));
    }
  };

  const handleAudioRef = (el: HTMLAudioElement | null, songId: number) => {
    audioRefs.current[songId] = el;
    if (el) {
      const songState = songStates[songId];
      el.volume = songState?.volume ?? 1; // Default volume is 1
      el.muted = songState?.isMuted ?? false; // Default is not muted
    }
  };

  return (
    <div className="album-list-item">
      <div className="album-info">
        <img className="album-img" src={album.imgSrc} alt={album.title} />
        <h2 className="album-title">{album.title}</h2>
        <p className="album-description">{album.description}</p>
      </div>

      <div className="album-song-list">
        {album.songs.slice(0, visibleSongs).map((song, index) => (
          <div className="album-song-item" key={song.id}>
            <div className="title-id">
              <span className="album-song-number">{index + 1}</span>
              <p className="album-song-title">{song.title}</p>
            </div>
            <button
              type="button"
              className="album-play-btn"
              onClick={() => handlePlay(song.id)}
            >
              <img
                src={isPlaying === song.id ? "/assets/images/pause.svg" : "/assets/images/play.svg"}
                alt={isPlaying === song.id ? "Pause" : "Play"}
                className="play-icon"
              />
            </button>
            <audio
              ref={(el) => handleAudioRef(el, song.id)}
              src={song.audioSrc}
              preload="metadata"
            >
              <track kind="captions" />
            </audio>
            <div className="volume-controls">
              <button
                type="button"
                className="mute-btn"
                onClick={() => toggleMute(song.id)}
              >
                <img
                  src={
                    songStates[song.id]?.isMuted
                      ? "/assets/images/Mute.svg"
                      : "/assets/images/Unmute.svg"
                  }
                  alt={songStates[song.id]?.isMuted ? "Unmute" : "Mute"}
                  className="mute-icon"
                />
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={
                  songStates[song.id]?.isMuted
                    ? 0
                    : songStates[song.id]?.volume !== undefined
                      ? songStates[song.id].volume
                      : 1
                }
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleVolumeChange(song.id, Number.parseFloat(e.target.value))
                }
              />
            </div>
          </div>
        ))}
        {visibleSongs < album.songs.length ? (
          <button
            type="button"
            className="album-show-more"
            onClick={showMoreSongs}
          >
            ↓
          </button>
        ) : (
          <button
            type="button"
            className="album-show-less"
            onClick={showLessSongs}
          >
            ↑
          </button>
        )}
      </div>
    </div>
  );
}

export default AlbumListItem;
