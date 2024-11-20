import { createContext, useContext, useState, useEffect } from "react";

// Définir l'interface pour un élément du panier
interface Item {
  id: number;
  nom: string;
  prix: number;
  quantite: number;
  image_url: string;
}

// Définir l'interface du contexte
interface PanierContextType {
  panier: Item[];
  addPanier: (item: Item) => void;
  updateQuantite: (id: number, quantite: number) => void;
  supprimerItem: (id: number) => void;
}

const ContextPanier = createContext<PanierContextType>({
  panier: [],
  addPanier: () => {},
  updateQuantite: () => {},
  supprimerItem: () => {},
});

export default function ProviderPanier({
  children,
}: {
  children: React.ReactNode;
}) {
  const [panier, setPanier] = useState<Item[]>([]);

  // Charger le panier depuis le localStorage au chargement du composant
  useEffect(() => {
    const storedPanier = localStorage.getItem("panier");
    if (storedPanier) {
      try {
        const parsedPanier = JSON.parse(storedPanier);
        // Vérification que tous les éléments du panier sont valides
        const panierValide = parsedPanier.every(
          (item: any) =>
            item &&
            item.id &&
            item.nom &&
            item.prix &&
            item.quantite &&
            item.image_url
        );
        if (panierValide) {
          setPanier(parsedPanier);
        } else {
          console.warn("Données de panier corrompues, réinitialisation du panier.");
          localStorage.removeItem("panier");
          setPanier([]); // Réinitialiser le panier si les données sont invalides
        }
      } catch (error) {
        console.error("Erreur de parsing du panier depuis le localStorage", error);
        localStorage.removeItem("panier");
        setPanier([]); // Réinitialiser en cas d'erreur de parsing
      }
    }
  }, []);

  // Sauvegarder le panier dans localStorage
  const sauvegarderPanier = (nouveauPanier: Item[]) => {
    setPanier(nouveauPanier); // Mettre à jour l'état React
    localStorage.setItem("panier", JSON.stringify(nouveauPanier)); // Sauvegarder dans localStorage
  };

// Ajouter un article au panier
const addPanier = (item: Item) => {
  // S'assurer que l'article a une quantité valide, par défaut à 1
  const itemToAdd = { ...item, quantite: item.quantite || 1 };

  setPanier((prevPanier) => {
    const panierCopy = [...prevPanier];

    // Vérifier si l'article existe déjà dans le panier
    const existingItemIndex = panierCopy.findIndex((i) => i.id === itemToAdd.id);

    if (existingItemIndex !== -1) {
      // Si l'article existe déjà, on augmente la quantité
      panierCopy[existingItemIndex].quantite += itemToAdd.quantite;
    } else {
      // Si l'article n'existe pas, on l'ajoute au panier
      panierCopy.push(itemToAdd);
    }

    // Sauvegarder la nouvelle version du panier dans localStorage
    sauvegarderPanier(panierCopy);

    return panierCopy;
  });
};


  // Mettre à jour la quantité d'un article
  const updateQuantite = (id: number, quantite: number) => {
    if (quantite <= 0) {
      supprimerItem(id); // Si la quantité devient 0 ou moins, on supprime l'article
    } else {
      setPanier((prevPanier) => {
        const panierCopy = prevPanier.map((item) =>
          item.id === id ? { ...item, quantite } : item
        );

        // Sauvegarder la nouvelle version du panier dans localStorage
        sauvegarderPanier(panierCopy);

        return panierCopy;
      });
    }
  };

  // Supprimer un article du panier
  const supprimerItem = (id: number) => {
    setPanier((prevPanier) => {
      const panierCopy = prevPanier.filter((item) => item.id !== id);

      // Sauvegarder la nouvelle version du panier dans localStorage
      sauvegarderPanier(panierCopy);

      return panierCopy;
    });
  };

  return (
    <ContextPanier.Provider value={{ panier, addPanier, updateQuantite, supprimerItem }}>
      {children}
    </ContextPanier.Provider>
  );
}

export const usePanier = () => {
  const context = useContext(ContextPanier);
  if (context === undefined) {
    throw new Error("usePanier must be used within a PanierProvider");
  }
  return context;
};
