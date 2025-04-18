import { createContext, useContext } from "react";
import { Item, ShoppingList } from "../data/modelShoppingList";

type ListsContextType = {
  shoppingLists: ShoppingList[];
  addList: (listName: string) => void;
  deleteList: (listId: string) => void;
  renameList: (listId: string, newListName: string) => void
  toggleItemChecked: (listId: string, itemId: string) => void
  addAnyItem: (listId: string, item: string | Item) => void
}

export const listsContext = createContext<ListsContextType | undefined>(undefined);

export function useListsContext() {
  const updatedLists = useContext(listsContext);

  if (!updatedLists) {
    throw new Error("useListsContext must be used within a ListsProvider.");
  }

  return updatedLists;
}
