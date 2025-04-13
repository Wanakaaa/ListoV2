import { createContext, useContext } from "react";
import { ShoppingList } from "../data/modelShoppingList";

type ListsContextType = {
  shoppingLists: ShoppingList[];
  addList: (listName: string) => void;
  deleteList: (listId: string) => void;
  renameList: (listId: string, newListName: string) => void
  addItem: (listId: string, newItem: string) => void
  toggleItemChecked: (listId: string, itemId: string) => void
}

export const listsContext = createContext<ListsContextType | undefined>(undefined);

export function useListsContext() {
  const updatedLists = useContext(listsContext);

  if (!updatedLists) {
    throw new Error("useListsContext must be used within a ListsProvider.");
  }

  return updatedLists;
}
