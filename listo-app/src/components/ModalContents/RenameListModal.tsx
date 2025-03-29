import React, { useEffect, useState } from "react";
import useLocalStorage from "../features/hooks/useLocalStorage";
import { ShoppingList } from "../../data/modelShoppingList";
import { useListsContext } from "../../context/listsContext";
import { useModalContext } from "../../context/ModalContext";
import { ListsProvider } from "../../context/ListsProvider";

// VIEW

type RenameListModalProps = {
  list: ShoppingList;
};

export const RenameListModal = ({ list }: RenameListModalProps) => {
  const [ newListName, setNewListName] = useState("");
  const { closeModal } = useModalContext();
  const { renameList } = useListsContext()
  

  useEffect(() => {
    setNewListName(list.listName);
  }, [list]);

  function saveNewName(e) {
    e.preventDefault();
    if (newListName.trim() === "") {
      setNewListName("Nouvelle liste")
      renameList(list.id, newListName)
    } else {
      renameList(list.id, newListName)
      console.log("nouveau nom: ", newListName)
    }
    closeModal()
  }

  return (
    <div>
      <h2>Renommer la liste</h2>
      <form>
        <label htmlFor="newListName">Nom de la liste</label>
        <input
          type="text"
          id="newListName"
          className="input-field required"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
        />
        <div className="flex justify-between border-2 border-green-400 p-4">
          <button
            className="border-2 border-red-400 p-4 bg-blue-400"
            onClick={() => {
              setNewListName(list.listName);
              closeModal();
            }}
            type="button"
          >
            Annuler
          </button>
          <button className="border-2 border-red-400 p-4" type="submit" onClick={saveNewName}>
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  );
};
