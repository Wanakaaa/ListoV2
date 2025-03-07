import { useState, useEffect, useRef } from "react";
import { ShoppingList } from "../data/modelShoppingList";
import useLocalStorage from "../components/features/list2/useLocalStorage"
import Lists from "../components/features/list2/Lists2";
import Modal from "../components/common/Modal";
import { CreateListModal } from "../components/Modal2/CreateListModal";
import { useListsContext } from "../context/listsContext";
import { ListsProvider } from "../context/ListsProvider";

const ListsPage = () => {
  const modalRef = useRef<any>(null)

const { shoppingLists } = useListsContext()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-around p-4">
        <h1>Vos listes</h1>
        <button
          className="border-2 border-red-500"
          onClick={() => modalRef.current?.openModal()}
        >
          Créer une liste
        </button>
      </div>
    <Lists shoppingLists={shoppingLists}/>
    <Modal ref={modalRef}>
    {(closeModal) => <CreateListModal closeModal={closeModal} />}
    </Modal>
    </div>
  );
};

export default ListsPage;
