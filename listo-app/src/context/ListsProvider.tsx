import React, { ReactNode, useEffect, useState } from "react";
import { listsContext } from "./listsContext";
import { ShoppingList } from "../data/modelShoppingList";
import useLocalStorage from "../components/features/hooks/useLocalStorage";

// Controller ou Model ?? Un peu les 2 pour l'instant

type ListsProviderProps = {
  children: ReactNode;
};

export const ListsProvider = ({ children }: ListsProviderProps) => {
  const [shoppingLists, setShoppingLists] = useState<ShoppingList[]>([]);
  const { getItemCustom, setItemCustom } = useLocalStorage("shoppingLists");

  // Permet d'afficher les listes dès le premier rendu
  useEffect(() => {
    const updatedLists = getItemCustom();
    setShoppingLists(updatedLists);
  }, []);

  //function addlist / delete/ rename/ Enlever de CreateListModal
  function addList(listName: string) {
    // Création de l'id et de la nouvelle instance de ShoppingList
    const id = `list_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
    const newList = new ShoppingList(id, listName, []);
    // ajout de la nouvelle liste à localStorage
    const existingLists = getItemCustom();
    const updatedList = [...existingLists, newList];
    setItemCustom(updatedList);
    setShoppingLists(updatedList);
  }

  function deleteList(listId: string) {
    try {
      const lists = getItemCustom();
      const filteredLists = lists.filter((list) => list.id !== listId);
      setItemCustom(filteredLists);
      setShoppingLists(filteredLists);
    } catch (error) {
      console.error("Erreur dans deleteList", error);
    }
  }

  function renameList(listId : string, newListName: string) {
      const lists = getItemCustom()
      const updatedLists = lists.map((list) => {
        if (listId === list.id) {
          return {...list, listName: newListName}
        } else {
          return list
        }
      })
      setItemCustom(updatedLists);
      setShoppingLists(updatedLists);
  }

  return (
    <listsContext.Provider value={{ shoppingLists, addList, deleteList, renameList }}>
      {children}
    </listsContext.Provider>
  );
};
