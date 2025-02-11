import Lists from "../components/features/lists/Lists";
import Modal from "../components/common/Modal";
import CreateListModal from "../components/features/lists/CreateListModal";
import { useState, useEffect } from "react";
import useLocalStorage from "../components/features/lists/useLocalStorage";
import { ShoppingList } from "../data/modelShoppingList";

const HomePage = () => {
  // Store shopping lists retrieved from localStorage
  const [shoppingLists, setShoppingLists] = useState([]);
  // Access localStorage function for getting and saving lists
  const { getItemCustom, setItemCustom, removeItemCustom } = useLocalStorage("shoppingLists");
  
  // Load stored lists when the component mounts
  useEffect(() => {
    const storedLists = getItemCustom();
    setShoppingLists(storedLists);
  }, [])

  const handleListCreated = (newList: ShoppingList) => {
    setItemCustom(newList);
    const updatedLists = getItemCustom();
    setShoppingLists(updatedLists);
  }

  const handleListDeleted = (listId: string) => {
    const updatedLists = removeItemCustom(listId)
    setShoppingLists(updatedLists)
  }

  return (
    <div>
      <div className="flex justify-around p-4">
        <h1 className="p-4">Vos listes de courses</h1>
        <Modal
          btnName="Nouvelle liste"
          className="bg-blue-500 p-4"
          // render prop is a function that returns the content inside the modal
          render={({ onClose }) => (
            // CreateListModal is rendered inside the modal
            <CreateListModal
              onClose={onClose} // This function will be called when the modal needs to be closed
              onListCreated={handleListCreated} // Pass the callback to handle list creation
            />
          )}
        />
      </div>
      <Lists shoppingLists={shoppingLists} 
      onDeleteList = {handleListDeleted}
      />
    </div>
  );
};

export default HomePage;
