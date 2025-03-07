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


/* import React, { useState } from "react";
import useLocalStorage from "../features/list2/useLocalStorage";
import { ShoppingList } from "../../data/modelShoppingList";
import { useListsContext } from "../../context/listsContext";

// VIEW

type CreateListModalProps = {
  closeModal: () => void;
};

export const CreateListModal = ({ closeModal }: CreateListModalProps) => {
  const { refreshLists } = useListsContext()
  // récup le nom de la nouvelle shoppingList ? 
  const [ listName, setListName ] = useState("")
  const { getItemCustom, setItemCustom } = useLocalStorage("shoppingLists")

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setListName(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create new instance de Shopping list, avec le nom et l'id, et le tableau vide pour les items
    const id = `list_${Date.now()}_${Math.floor(Math.random() * 100000)}`
    const newList = new ShoppingList(id, listName, [])
    console.log("newList: ", newList)
    // ajouter l'objet au tableau de listes ? 
    const existingLists = getItemCustom()
    const updatedLists = [...existingLists, newList]
    setItemCustom(updatedLists)
    console.log("updated lists : ", updatedLists)
    refreshLists()
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