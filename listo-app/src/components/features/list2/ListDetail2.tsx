import { useState } from "react";
import ListMenu from "./ListMenu";

import { useNavigate } from "react-router-dom";

type List = {
  id: string;
  listName: string;
  items: string[];
};

const ListDetail = ({list, onSelectedList}: {list: List; onSelectedList : (listId: string) => void }) => {

  // Gestion de l'état du menu (ouvert ou non)
  /*const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false)
  const onToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }
*/ 

   const handleListNavigation = (event: React.MouseEvent) => {
    const target= event.target as HTMLElement
    if (target.tagName ==="BUTTON") {
      console.log("Clic sur ⋮ détecté")
      return
    } else {
      onSelectedList(list.id)
    }
   }


  const actions = [
    {
      id: "delete",
      label: "supprimer",
      execute: () => 
        console.log(`suppression de la liste ${list.id}`)
    },
  ];
  

  return (
    <li
      className="border-2 border-purple-500 p-4"
      onClick={() => onSelectedList(list.id)}
    >
      <div className="border-2 flex justify-between">
        <h5 className="p-4">{list.listName}</h5>
        <div className="flex w-1/2 border border-blue-600 justify-end gap-2">
          <div className="p-4">item/{list.items.length}</div>
          <button
            className="p-4 bg-yellow-300"
            onClick={(event) => {
              console.log("test")
            }}
          >
            ⋮
          </button>

        </div>
      </div>
      <div className="relative border-2 border-green-400">Barre bizzare
      </div>
    </li>
  );
};

export default ListDetail;

/*import { useState } from "react";
import ListMenu from "./ListMenu";

import { useNavigate } from "react-router-dom";

type List = {
  id: string;
  listName: string;
  items: string[];
};

const ListDetail = ({list}: {list: List; }) => {

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
      execute: () => 
        console.log(`suppression de la liste ${list.id}`)
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
*/