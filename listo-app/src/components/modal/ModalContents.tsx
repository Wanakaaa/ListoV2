import { useModalContext } from "../../context/modalContext";
import { useState } from "react";
import { ShoppingList } from "../../data/modelShoppingList";

export const CreateModalContent = () => {
  const { closeModal, onListCreated } = useModalContext();
  const [listName, setListName] = useState("");

  // Mettre à jour la valeur de listName à chaque changement dans le champ input
  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setListName(event.target.value);
  };

  // Fonction de soumission du formulaire
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Créer un ID unique pour la nouvelle liste
    const id = `list_${Date.now()}_${Math.floor(Math.random() * 100000)}`;

    // Créer une instance de la nouvelle liste
    const newList = new ShoppingList(id, listName, []);

    // Si la fonction onListCreated est définie, l'appeler avec la nouvelle liste
    if (onListCreated) {
      onListCreated(newList);
    }
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
          value={listName}
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

export const DeleteModalContent = () => {
    const { closeModal, listId, onListDeleted } = useModalContext();

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log("🔍 onListDeleted dans DeleteModalContent :", onListDeleted);
        if (!listId) {
            throw new Error("ListId is null, can't delete the list")
        }
        if (onListDeleted) {
            onListDeleted(listId); 
        }
        console.log("liste à supprimer : ", listId)
        closeModal();
    };

    return (
        <div>Voulez vous vraiment supprimer cette liste {listId}? 
        <button type="button" onClick={closeModal}>Annuler</button>
        <button type="submit" onClick={handleSubmit}>Supprimer</button></div>
    )
}