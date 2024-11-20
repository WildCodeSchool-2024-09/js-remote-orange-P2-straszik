import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer";
import Navbar from "./components/navBar/navbar";
import Accueil from "./pages/Accueil/Accueil";
import Albums from "./pages/Album/Album";
import AlbumItem from "./pages/AlbumItem/AlbumItem";
import Boutique from "./pages/Boutique/Boutique";
import "@fontsource/zilla-slab";
import ProviderPanier from "./contexts/ContextPanier";
import Panier from "./pages/Panier/panier";

function App() {
  const location = useLocation();

  React.useEffect(() => {
    document.body.style.overflow = location.pathname === "/" ? "clip" : "";
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
          <Route path="/panier" element={<Panier />} />
        </Routes>
        <Footer />
      </ProviderPanier>
    </div>
  );
}

export default App;
