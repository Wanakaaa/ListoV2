import React, { useState } from "react";
import { modalContext } from "./modalContext";
import { ChildrenType } from "../types/commonTypes";
import { ShoppingList } from "../data/modelShoppingList";

const ModalProvider = ({ children }: ChildrenType) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [listId, setListId] = useState<string | null>(null);
  const [onListCreated, setOnListCreated] = useState<
    ((newLists: ShoppingList) => void) | undefined
  >(undefined);
  const [onListDeleted, setOnListDeleted] = useState<
    ((listId: string) => void) | undefined
  >(undefined);

  const openModal = (
    type: string,
    id: string | null = null,
    onListCreated?: (newList: ShoppingList) => void,
    onListDeleted?: (listId: string) => void
  ) => {
    setIsOpen(true);
    setModalType(type);
    if (id) {
      setListId(id);
    }
    if (onListCreated) {
     setOnListCreated(() => onListCreated);
    }
    if (onListDeleted) {
        setOnListDeleted(() => onListDeleted)
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalType(null);
    setListId(null);
    setOnListCreated(undefined);
    setOnListDeleted(undefined);
  };



  return (
    <modalContext.Provider
      value={{
        isOpen,
        modalType,
        listId,
        onListCreated,
        onListDeleted,
        openModal,
        closeModal,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};

export default ModalProvider;
