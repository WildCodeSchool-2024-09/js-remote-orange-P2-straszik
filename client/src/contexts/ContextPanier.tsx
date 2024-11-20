import { createContext, useContext } from "react";

interface PanierContextType {
  panier: object[];
  addPanier: (item: object) => void;
}

const ContextPanier = createContext<PanierContextType>({
  panier: [],
  addPanier: () => {},
});

export default function ProviderPanier({
  children,
}: { children: React.ReactNode }) {
  const panier: object[] = [];

  const addPanier = (item: object) => {
    panier.push(item);
    localStorage.setItem("panier", JSON.stringify(panier));
  };
  return (
    <ContextPanier.Provider value={{ panier, addPanier }}>
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
