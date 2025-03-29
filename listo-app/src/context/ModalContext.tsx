import { createContext, useContext, useState, ReactNode } from "react";
import Modal from "../components/Modal/Modal";

// Définition du type du contexte
type ModalContextType = {
  isModalOpen: boolean;
  openModal: (modalChildren: ReactNode) => void;
  closeModal: () => void;
};

// Création du contexte avec une valeur initiale `null`
export const ModalContext = createContext<ModalContextType | null>(null);

// Hook personnalisé pour utiliser le contexte
export function useModalContext() {
  const modal = useContext(ModalContext);
  if (!modal) {
    throw new Error("useModalContext must be used within a ModalProvider.");
  }
  return modal;
}

// Composant Provider qui va englober `Lists.jsx`
export function ModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalChildren, setModalChildren] = useState<ReactNode | null>(null);

  function openModal(children: ReactNode) {
    setModalChildren(children);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setModalChildren(null);
  }

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
      {isModalOpen && <Modal>{modalChildren} </Modal>}
    </ModalContext.Provider>
  );
}
