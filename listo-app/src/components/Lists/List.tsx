import React, { useEffect, useRef } from "react";
import ListMenu from "./ListMenu";
import { useNavigate } from "react-router-dom";
import { useMenuContext } from "../../context/MenuContext";
import { CreateListModal } from "../ModalContents/CreateListModal";
import { RenameListModal } from "../ModalContents/RenameListModal";
import { useModalContext } from "../../context/ModalContext";
import Modal from "../Modal/Modal";
import ContentModal from "../ModalContents/ContentModal";
import DeleteListModal from "../ModalContents/DeleteListModal";

const List = ({ list }) => {
  const { openMenuId, toggleMenu } = useMenuContext();
  const { isModalOpen, openModal } = useModalContext();
  const navigate = useNavigate();

  const goToListPage = () => {
    navigate(`/lists/${list.id}`);
  };

  const openModalRename = () => {
    openModal(<RenameListModal list={list} />);
  };

  const openModalDelete = () => {
    openModal(<DeleteListModal list={list} />);
  };

  // Clic en dehors du menu qui ferme
  const menuRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        openMenuId === list.id &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        toggleMenu(list.id);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenuId, list.id, toggleMenu]);

  const clickOnMenu = (event) => {
    event.stopPropagation();
    toggleMenu(list.id);
  };

  // Pour le menu
  function clickOnMenuButton(event) {
    event.stopPropagation();
  }

  // Ajouter le clickoutside pour refermer le menu
  function closeMenu() {
    toggleMenu(list.id);
  }

  // Sera un composant progress bar + à ajouter à SelectedListPage
  const totalItems = list.items.length
  const checkedItems = list.items.filter(item => item.isChecked).length
  const progressPercentage = totalItems === 0 ? 0 : (checkedItems / totalItems) * 100

  return (
    <div
      id={list.id}
      className="border-2 border-green-600 rounded-md p-4 "
      onClick={goToListPage}
    >
      <div className="border-2 border-orange-400 flex justify-between items-center">
        <h5 className="border-2 border-purple-600">{list.listName}</h5>
        <div className="border-2 border-purple-600 flex gap-x-4">
          <div className="border-2 border-pink-400">
            {checkedItems}/{totalItems}
          </div>
          <button className="bg-blue-400" onClick={clickOnMenu}>
            ⋮ Menu
          </button>
        </div>
      </div>
      <div className="border-2 border-blue-400 h-2 w-full bg-gray-400">
        <div className="bg-green-500 h-2" style={{ width: progressPercentage + '%'}} ></div>
      </div>
      <div className="border-2 border-orange-400">____________________</div>
      {openMenuId === list.id && (
        <div ref={menuRef} onClick={clickOnMenuButton} className="relative">
          <div className="absolute right-0 top-full mt-2 bg-pink-200 shadow-md rounded p-4 z-50 flex flex-col">
            <button
              onClick={() => {
                toggleMenu(list.id);
                openModalRename();
              }}
            >
              Rename
            </button>
            <button
              onClick={() => {
                toggleMenu(list.id);
                openModalDelete();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;

/* Quand on déplacera Modal dans un autre composant, on pourra modifier le onClick du dialog :
onClick={(e) => {
    e.stopPropagation()
    handleOutsideClick(e)
  }}
    onMouseDown={(e) => e.stopPropagation()
  >

  onClick {handleOutsideClick}> */
