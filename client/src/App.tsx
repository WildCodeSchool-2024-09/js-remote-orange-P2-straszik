
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Accueil from "./pages/Accueil/Accueil";
import Albums from "./pages/Album/Album";
import Navbar from "./components/navBar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
