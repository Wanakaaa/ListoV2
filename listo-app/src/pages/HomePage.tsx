import Lists from "../components/features/lists/Lists";
import Modal from "../components/common/Modal";
import CreateListModal from "../components/features/lists/CreateListModal";
import { useState, useEffect } from "react";
import useLocalStorage from "../components/features/lists/useLocalStorage";

const HomePage = () => {
  const [shoppingLists, setShoppingLists] = useState([]);
  const { getItem, setItem } = useLocalStorage("shoppingLists");

  useEffect(() => {
    const storedLists = getItem();
    setShoppingLists(storedLists);
  }, []);

  const handleListCreated = (newList) => {
    setItem(newList);
    const updatedLists = getItem();
    setShoppingLists(updatedLists);
  };

  return (
    <div>
      <div className="flex justify-around p-4">
        <h1 className="p-4">Vos listes de courses</h1>
        <Modal
          btnName="Nouvelle liste"
          className="bg-blue-500 p-4"
          render={({ onClose }) => (
            <CreateListModal
              onClose={onClose}
              onListCreated={handleListCreated}
            />
          )}
        />
      </div>
      <Lists shoppingLists={shoppingLists} />
    </div>
  );
};

export default HomePage;
