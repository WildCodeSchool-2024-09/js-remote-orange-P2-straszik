import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/footer/footer";
import Navbar from "./components/navBar/navbar";
import Accueil from "./pages/Accueil/Accueil";
import Albums from "./pages/Album/Album";
import AlbumItem from "./pages/AlbumItem/AlbumItem";
import Boutique from "./pages/Boutique/Boutique";
import Concerts from "./pages/Concerts/Concerts";
import Panier from "./pages/panier/panier";
import "@fontsource/zilla-slab";
import ProviderPanier from "./contexts/ContextPanier";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Enlever les classes précédentes
    document.body.classList.remove("home", "album");

    const path = location.pathname.toLowerCase(); // Mise en minuscule de l'URL

    // Ajouter la classe "home" pour la page d'accueil
    if (path === "/") {
      document.body.classList.add("home");
    }
    // Ajouter la classe "album" pour la page des albums
    else if (path === "/albums") {
      document.body.classList.add("album");
    } else {
      document.body.classList.add("other");
    }
  }, [location.pathname]);

  return (
    <div>
      <ProviderPanier>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/album/:id" element={<AlbumItem />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/concerts" element={<Concerts />} />
          <Route path="/panier" element={<Panier />} />
        </Routes>
        <Footer />
      </ProviderPanier>
    </div>
  );
}

export default App;
