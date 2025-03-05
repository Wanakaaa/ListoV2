import { useState, useEffect } from "react";
import { useModalContext } from "../context/modalContext";
import Modal2 from "../components/modal/Modal2";
import { ShoppingList } from "../data/modelShoppingList";
import useLocalStorage from "../components/features/lists/useLocalStorage";
import Lists from "../components/features/list2/Lists2";

const ListsPage = () => {
  const [shoppingLists, setShoppingLists] = useState<ShoppingList[]>([]);
  const { getItemCustom, setItemCustom, removeItemCustom } = useLocalStorage("shoppingLists");

  const { openModal, listId} = useModalContext();

  // Afficher les listes au démarrage de la page
  useEffect(() => {
    const storedLists = getItemCustom();
    setShoppingLists(storedLists);
  }, []);

  console.log(shoppingLists)

  // Ajouter la nouvelle liste à la liste existante dans le localStorage et l'état
  const handleListCreated = (newList: ShoppingList) => {
    const existingLists = getItemCustom();
    const updatedLists = [...existingLists, newList];
    setItemCustom(updatedLists);
    setShoppingLists(updatedLists);
    console.log("handleListCreated est exécuté")
  };

  const handleDeleteList = (listId: string) => {
    console.log("🗑️ Suppression demandée pour la liste :", listId);
    const updatedLists = removeItemCustom(listId);
    console.log("📃 Listes après suppression :", updatedLists);
    setShoppingLists(updatedLists);
  }



  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-around p-4">
        <h1>Vos listes</h1>
        <button
          className="border-2 border-red-500"
          onClick={() => openModal("add", null, handleListCreated)}
        >
          Créer une liste
        </button>
        <button
          className="border-2 border-red-500"
          onClick={() => handleDeleteList("list_1741116255344_61550")}
        >
          Supprimer la liste 
        </button>
      </div>
    <Lists shoppingLists={shoppingLists}/>
      <Modal2 />
    </div>
  );
};

export default ListsPage;
