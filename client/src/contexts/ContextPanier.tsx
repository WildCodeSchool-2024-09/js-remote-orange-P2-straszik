import { createContext, useContext, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";

// Interface pour un élément du panier
interface Item {
  id: number;
  nom: string;
  prix: number;
  quantite: number;
  image_url: string;
}

// Interface pour le contexte du panier
interface PanierContextType {
  panier: Item[];
  addPanier: (item: Item) => void;
  updateQuantite: (id: number, quantite: number) => void;
  supprimerItem: (id: number) => void;
  clearPanier: () => void;
  calculerTotal: () => number;
}

const PanierContext = createContext<PanierContextType | undefined>(undefined);

const ProviderPanier: FC<{ children: ReactNode }> = ({ children }) => {
  const [panier, setPanier] = useState<Item[]>([]);

  // Charger le panier depuis localStorage au démarrage
  useEffect(() => {
    const storedPanier = localStorage.getItem("panier");
    if (storedPanier) {
      setPanier(JSON.parse(storedPanier));
    }
  }, []);

  // Sauvegarder dans localStorage à chaque mise à jour
  useEffect(() => {
    localStorage.setItem("panier", JSON.stringify(panier));
  }, [panier]);

  const addPanier = (item: Item) => {
    setPanier((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantite: i.quantite + item.quantite } : i,
        );
      }
      return [...prev, item];
    });
  };

  const updateQuantite = (id: number, quantite: number) => {
    setPanier((prev) =>
      quantite > 0
        ? prev.map((i) => (i.id === id ? { ...i, quantite } : i))
        : prev.filter((i) => i.id !== id),
    );
  };

  const supprimerItem = (id: number) => {
    setPanier((prev) => prev.filter((item) => item.id !== id));
  };

  const clearPanier = () => {
    setPanier([]);
  };

  const calculerTotal = () => {
    return panier.reduce((total, item) => total + item.prix * item.quantite, 0);
  };

  return (
    <PanierContext.Provider
      value={{
        panier,
        addPanier,
        updateQuantite,
        supprimerItem,
        clearPanier,
        calculerTotal,
      }}
    >
      {children}
    </PanierContext.Provider>
  );
};

export const usePanier = () => {
  const context = useContext(PanierContext);
  if (!context) {
    throw new Error("usePanier doit être utilisé dans un ProviderPanier");
  }
  return context;
};

export default ProviderPanier;
