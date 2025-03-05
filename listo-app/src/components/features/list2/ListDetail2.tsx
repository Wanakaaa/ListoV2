import { useState } from "react";
import ListMenu from "./ListMenu";
import Modal2 from "../../modal/Modal2";
import { useNavigate } from "react-router-dom";
import { useModalContext } from "../../../context/modalContext";


type List = {
  id: string;
  listName: string;
  items: string[];
};

const ListDetail = ({list}: {list: List; }) => {

  const { openModal, onListDeleted } = useModalContext()

  // Gestion de l'état du menu (ouvert ou non)
  const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false)
  const onToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Gestion de la navigation
  let navigate = useNavigate()
  const handleNavigateToList = (list : List) => {
    navigate(`/lists/${list.id}`)
  }

  const handleListNavigation = (event: React.MouseEvent) => {
    const target= event.target as HTMLElement
    if (target.tagName ==="BUTTON") {
      console.log("Clic sur ⋮ détecté")
      return
    }
    handleNavigateToList(list)
  }

  const actions = [
    {
      id: "delete",
      label: "supprimer",
      execute: () => openModal("delete", list.id, undefined) // Je dois ajouter ici handleLDeleteList pour que ça se set dans onListdeleted 
    },
    {
      id: "2",
      label: "rename",
      execute: () => {
        console.log(`renommage de la liste ${list.id}`);
      },
    },
  ];

  return (
    <li
      className="border-2 border-purple-500 p-4"
      onClick={(event) => {
        handleListNavigation(event)
      }}
    >
      <div className="border-2 flex justify-between">
        <h5 className="p-4">{list.listName}</h5>
        <div className="flex w-1/2 border border-blue-600 justify-end gap-2">
          <div className="p-4">item/{list.items.length}</div>
          <button
            className="p-4 bg-yellow-300"
            onClick={(event) => {
              event.stopPropagation();
              onToggle();
            }}
          >
            ⋮
          </button>

        </div>
      </div>
      <div className="relative border-2 border-green-400">Barre bizzare
      {isMenuOpen && <ListMenu onClose={onToggle} actions={actions} />}
      </div>
    </li>
  );
};

export default ListDetail;
