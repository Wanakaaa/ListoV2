import React from "react";
import Lists from "../components/Lists/Lists";
import { CreateListModal } from "../components/ModalContents/CreateListModal";
import { useModalContext } from "../context/ModalContext";

const Listes_Test = () => {
  const { isModalOpen, openModal, closeModal } = useModalContext();

  const openModalCreate = () => {
    openModal(<CreateListModal />);
  };

  return (
    <>
      <div className="border-2 border-red-600 flex flex-col p-12">
        <div className="border-2 border-blue-700 flex justify-between p-4">
          <h1 className="border-2 border-green-600">Vos listes de courses</h1>
          <button
            onClick={openModalCreate}
            className="border-2 border-green-600 bg-green-400"
          >
            Créer une nouvelle liste
          </button>
        </div>
        <Lists />
      </div>
    </>
  );
};

export default Listes_Test;
