// Dans le composant App.js
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/Accueil/Accueil";
import Albums from "./pages/Album/Album";
import Navbar from "./components/navBar/navbar";
import Footer from "./components/footer/footer";
import AlbumItem from "./pages/AlbumItem/AlbumItem";
// import concerts from "./pages/concerts/concerts";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/album/:id" element={<AlbumItem />} />
        {/* <Route path="/concerts" element={<concerts />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
