import React from "react";
import { useListsContext } from "../../context/listsContext";
import { ShoppingList } from "../../data/modelShoppingList";
import { useModalContext } from "../../context/ModalContext";

type DeleteListModalProps = {
  list: ShoppingList;
};

const DeleteListModal = ({ list }: DeleteListModalProps) => {
  const { deleteList } = useListsContext();
  const { closeModal } = useModalContext();

  return (
    <div>
      On veut supprimer la modale {list.listName} ?
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
          onClick={() => deleteList(list.id)}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default DeleteListModal;
