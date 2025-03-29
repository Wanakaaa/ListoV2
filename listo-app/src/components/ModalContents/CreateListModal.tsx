import React, { useState } from "react";
import useLocalStorage from "../features/hooks/useLocalStorage";
import { ShoppingList } from "../../data/modelShoppingList";
import { useListsContext } from "../../context/listsContext";
import { useModalContext } from "../../context/ModalContext";

export const CreateListModal = () => {
  const { addList } = useListsContext();
  const { closeModal } = useModalContext();

  const [listName, setListName] = useState("");

  // sans ça, je récupère pas ce que j'écris dans l'input
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addList(listName);
    closeModal();
  };

  return (
    <div>
      <h2>Créer une nouvelle liste</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newListName">Nom de la liste</label>
        <input
          type="text"
          id="newListName"
          placeholder="Nouvelle liste"
          className="input-field required"
          onChange={handleContentChange}
        />
        <div className="flex justify-between border-2 border-green-400 p-4">
          <button
            className="border-2 border-red-400 p-4 bg-blue-400"
            onClick={closeModal}
            type="button"
          >
            Annuler
          </button>
          <button className="border-2 border-red-400 p-4" type="submit">
            Créer
          </button>
        </div>
      </form>
    </div>
  );
};

/*
import React, { useState } from "react";
import useLocalStorage from "../features/list2/useLocalStorage";
import { ShoppingList } from "../../data/modelShoppingList";
import { useListsContext } from "../../context/listsContext";

// VIEW

type CreateListModalProps = {
  closeModal: () => void;
};

export const CreateListModal = ({ closeModal }: CreateListModalProps) => {
  const { addList } = useListsContext()

  const [ listName, setListName ] = useState("")

  // sans ça, je récupère pas ce que j'écris dans l'input
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListName(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addList(listName)
    closeModal()
  }

  return (
    <div>
      <h2>Créer une nouvelle liste</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newListName">Nom de la liste</label>
        <input type="text" id="newListName" placeholder="Nouvelle liste" className="input-field required"
        onChange={handleContentChange}/>
        <div className="flex justify-between border-2 border-green-400 p-4">
          <button
            className="border-2 border-red-400 p-4 bg-blue-400"
            onClick={closeModal}
            type="button"
          >
            Annuler
          </button>
          <button
            className="border-2 border-red-400 p-4"
            type="submit"
          >
            Créer
          </button>
        </div>
      </form>
    </div>
  );
};

*/
