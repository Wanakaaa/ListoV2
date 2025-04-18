import React, { ReactNode, useEffect, useState } from "react";
import { listsContext } from "./listsContext";
import { Item, ShoppingList } from "../data/modelShoppingList";
import useLocalStorage from "../components/features/hooks/useLocalStorage";
import { availableItems } from "../data/availableItems";

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

  function renameList(listId: string, newListName: string) {
    const lists = getItemCustom();
    const updatedLists = lists.map((list) => {
      if (listId === list.id) {
        return { ...list, listName: newListName };
      } else {
        return list;
      }
    });
    setItemCustom(updatedLists);
    setShoppingLists(updatedLists);
  }

  //Quand on tape l'item, il va falloir vérifier si ça existe dans notre base ou pas.
  // Savoir si on utilise addExistingItem ou addItem (à renommer addNewItem ?)

  // "Tu te retrouves avec un objet au final, donc utiliser cela pour pas dupliquer ?""
  
  // Créer un fichier pour ranger ça proprement (utils .ts ?)
  function getNormalizedName(name: string) {
    return name.toLowerCase().trim()
  }

  function getItemId() {
    const itemId = `item_${Date.now()}_${Math.floor(Math.random() * 100000)}`
    return itemId
  }

  function getCreatedAt() {
    const createdAt = new Date().toISOString()
    return createdAt
  }

  function createNewObjectItem(input: string | Item) {
    if (typeof input === "string") {
      const item = {
        itemId : getItemId(),
        itemName: input,
        isChecked: false,
        createdAt: getCreatedAt(),
        quantity: 1
      }
      return item
    } else {
      const item = {...input, createdAt: getCreatedAt(), quantity: 1}
      return item
    }
  }

  function addAnyItem(listId: string, item: string | Item) {
    const newItem = createNewObjectItem(item)
    const lists = getItemCustom()

    const updatedLists = lists.map((list) => {
      if (listId === list.id) {
        const existingItem = list.items.find(
          (item) => getNormalizedName(item.itemName) === getNormalizedName(newItem.itemName)
        )
        if (existingItem) {
          const updatedItems = list.items.map((item) => {
            if (item === existingItem) {
              return {...item, quantity: item.quantity + 1}
            } else {
              return item
            }
          })
          return { ...list, items: updatedItems }
        } else {
          return {...list, items: [...list.items, newItem]}
        } 
      } else {
        return list
      }
    })
    setItemCustom(updatedLists)
    setShoppingLists(updatedLists)
  }

  function toggleItemChecked(listId: string, itemId: string) {
    const lists = getItemCustom();
    const updatedLists = lists.map((list) => {
      if (list.id === listId) {
        const updatedItems = list.items.map((item) => {
          return item.itemId === itemId
            ? { ...item, isChecked: !item.isChecked }
            : item;
        });
        return { ...list, items: updatedItems };
      } else {
        return list;
      }
    });
    setItemCustom(updatedLists);
    setShoppingLists(updatedLists);
  }

  return (
    <listsContext.Provider
      value={{
        shoppingLists,
        addList,
        deleteList,
        renameList,
        toggleItemChecked,
        addAnyItem,
      }}
    >
      {children}
    </listsContext.Provider>
  );
};
