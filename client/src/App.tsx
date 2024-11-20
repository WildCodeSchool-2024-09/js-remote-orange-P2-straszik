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
function App() {
  const location = useLocation();

  React.useEffect(() => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.style.position = location.pathname === "/" || location.pathname.startsWith("/albums") ? "fixed" : "";

    }
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
        </Routes>
        <Footer />
      </ProviderPanier>
    </div>
  );
}

export default App;
