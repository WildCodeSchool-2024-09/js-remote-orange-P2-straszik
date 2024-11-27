import { createContext, useContext, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";

interface Item {
  id: number;
  nom: string;
  prix: number;
  quantite: number;
  image_url: string;
}

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
      try {
        const parsedPanier = JSON.parse(storedPanier);
        if (Array.isArray(parsedPanier)) {
          setPanier(parsedPanier);
        }
      } catch (error) {
        console.error("Erreur lors du chargement du panier :", error);
      }
    }
  }, []);

  // Fonction pour sauvegarder le panier dans localStorage
  const sauvegarderPanier = (nouveauPanier: Item[]) => {
    setPanier(nouveauPanier); // Met à jour l'état local
    localStorage.setItem("panier", JSON.stringify(nouveauPanier)); // Sauvegarde dans localStorage
  };

  const addPanier = (item: Item) => {
    sauvegarderPanier(
      panier.some((i) => i.id === item.id)
        ? panier.map((i) =>
            i.id === item.id
              ? { ...i, quantite: i.quantite + item.quantite }
              : i,
          )
        : [...panier, item],
    );
  };

  const updateQuantite = (id: number, quantite: number) => {
    if (quantite > 0) {
      sauvegarderPanier(
        panier.map((i) => (i.id === id ? { ...i, quantite } : i)),
      );
    } else {
      supprimerItem(id); // Supprimer si la quantité devient 0
    }
  };

  const supprimerItem = (id: number) => {
    const nouveauPanier = panier.filter((item) => item.id !== id);
    sauvegarderPanier(nouveauPanier); // Met à jour localStorage immédiatement après suppression
  };

  const clearPanier = () => {
    localStorage.removeItem("panier"); // Vide complètement localStorage
    setPanier([]); // Réinitialise l'état local
  };

  const calculerTotal = () =>
    panier.reduce((total, item) => total + item.prix * item.quantite, 0);

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
