import { createContext, useContext, useState, ReactNode } from "react";

// Définition du type du contexte
type MenuContextType = {
  openMenuId: string | null;
  toggleMenu: (listId: string) => void;
};

// Création du contexte avec une valeur initiale `null`
export const MenuContext = createContext<MenuContextType | null>(null);

// Hook personnalisé pour utiliser le contexte
export function useMenuContext() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider.");
  }
  return context;
}

// Composant Provider qui va englober `Lists.jsx`
export function MenuProvider({ children }: { children: ReactNode }) {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  // Fonction pour ouvrir/fermer un menu
  function toggleMenu(listId: string) {
    setOpenMenuId((prev) => (prev === listId ? null : listId));
  }

  return (
    <MenuContext.Provider value={{ openMenuId, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
