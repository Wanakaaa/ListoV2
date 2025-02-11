import { useState, useEffect } from "react";

import Modal2 from "../components/modal/Modal2";
import CreateListForm from "../components/modal/CreateListForm";
import { ShoppingList } from "../data/modelShoppingList";
import useLocalStorage from "../components/features/lists/useLocalStorage";
import Lists from "../components/features/list2/Lists2";


const ListsPage = () => {
    const [shoppingLists, setShoppingLists] = useState([])
    const { getItemCustom, setItemCustom, removeItemCustom } = useLocalStorage("shoppingLists")
    //v gestion modal v
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => {
        setIsOpen(true);
    }
    const onClose = () => {
        setIsOpen(false)
    }

  useEffect(() => {
    const storedLists = getItemCustom();
    console.log("useEffect, juste après const storedList : ", storedLists)
    setShoppingLists(storedLists);
    console.log("useEffect, juste après setShopp(storedLists) : ", storedLists)
  }, []);


  // Add new list
  const addNewList = (listName: string) => {
    const id = `list_${Date.now()}_${Math.floor(Math.random() * 100000)}`;
    const newList = new ShoppingList(id, listName, []);
    
    console.log("Avant mise à jour, shoppingLists :", shoppingLists);
    console.log("Nouvelle liste à ajouter :", newList);
    
    setShoppingLists((prevLists) => {
        const updatedLists = [...prevLists, newList];
        console.log("Après mise à jour, updatedLists :", updatedLists);
        
        setItemCustom(updatedLists);
        return updatedLists;
    });
};

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-around p-4">
        <h1>Vos listes</h1>
        <button className="border-2 border-red-500" onClick={onOpen}>
          Créer une liste
        </button>
      </div>

        <Lists arrayLists={shoppingLists}></Lists>
      
      {isOpen ? (
        <Modal2
          isOpen={isOpen}
          onClose={onClose}
          children={
            <CreateListForm onClose={onClose} addNewList={addNewList} />
          }
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ListsPage;
