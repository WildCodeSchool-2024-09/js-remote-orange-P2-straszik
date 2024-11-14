// Dans le composant App.js
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navBar/navbar";
import Accueil from "./pages/Accueil/Accueil";
import Albums from "./pages/Album/Album";
import AlbumItem from "./pages/AlbumItem/AlbumItem";
// import concerts from "./pages/concerts/concerts";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/album/:id" element={<AlbumItem />} />
        <Route path="/albums" element={<Albums />} />
        {/* <Route path="/concerts" element={<concerts />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
