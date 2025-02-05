import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ListActionsMenu from "../../common/ListActionsMenu";

type ListsProps = {
  shoppingLists: { id: string; listName: string; items: any[] }[];
  // Array of shoppingLists passed as a prop
};

const Lists = ({ shoppingLists }: ListsProps) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState<string | null>(null);

  const handleClick = (listId: string) => {
    navigate(`lists/${listId}`)
  }

  const onToggle = (listId : string) => (listId === isOpen) ? setIsOpen(null) : setIsOpen(listId)



  // Déclare un tableau d'objet pour définir les labels + actions qui seront possibles dans le dropdown
  const options = [
    { id: "option1", label: "Renommer", action: () => console.log("Renommer cliqué") },
    { id: "option2", label: "Supprimer", action: () => console.log("Supprimer cliqué") },
    { id: "option3", label: "3", action: () => console.log("action 3") },
    { id: "option4", label: "4", action: () => console.log("action 4 ") },
  ];

  return (
    <div className="flex flex-col gap-4">
      {shoppingLists?.length === 0 ? (
        <p>Aucune liste disponible</p>
      ) : (
        shoppingLists.map((list) => (
            <div key={list.id}  className="w-full border-2 border-pink-500"
            onClick={() => handleClick(list.id)}>
              <div className="flex justify-around">
                <div>{list.listName}</div>
                <div>0/{list.items.length}</div>
                <div>
                  <button 
                  className=" p-4 bg-gray-400"
                  onClick={(e) => {
                    e.stopPropagation()
                    onToggle(list.id) }
                  }>⋮</button>
                  {isOpen === list.id && (
                    <ListActionsMenu
                      isOpen={isOpen}
                      onToggle={() => {onToggle(list.id)}}
                      options={options}
                    />
                  )}
                </div>
              </div>
              <div>barre cheloue</div>
            </div>
        ))
      )}
    </div>
  );
};

export default Lists;


/* 
import { Link } from "react-router-dom";
import { useState } from "react";
import ListActionsMenu from "../../common/ListActionsMenu";

type ListsProps = {
  shoppingLists: { id: string; listName: string; items: any[] }[];
  // Array of shoppingLists passed as a prop
};

const Lists = ({ shoppingLists }: ListsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
    console.log("is open est à:", isOpen);
  };
  // Déclare un tableau d'objet pour définir les labels + actions qui seront possibles dans le dropdown
  const options = [
    { label: "Renommer", action: () => console.log("Renommer cliqué !") },
    { label: "Supprimer", action: () => console.log("Supprimer cliqué ! ") },
  ];

  return (
    <div className="flex flex-col gap-4">
      {shoppingLists?.length === 0 ? (
        <p>Aucune liste disponible</p>
      ) : (
        shoppingLists.map((list) => (
          <Link key={list.id} to={`/lists/${list.id}`}>
            <div className="w-full border-2 border-pink-500">
              <div className="flex justify-around">
                <div>{list.listName}</div>
                <div>0/{list.items.length}</div>
                <div>
                  <button onClick={(e) => {
                    e.stopPropagation()
                    onToggle() }
                  }>⋮</button>
                  {isOpen && (
                    <ListActionsMenu
                      isOpen={isOpen}
                      onToggle={onToggle}
                      options={options}
                    />
                  )}
                </div>
              </div>
              <div>barre cheloue</div>
            </div>
          </Link>
        ))
      )}
      <div>
        <button onClick={onToggle}>⋮</button>
        {isOpen && (
          <ListActionsMenu
            isOpen={isOpen}
            onToggle={onToggle}
            options={options}
          />
        )}
      </div>
    </div>
  );
};

export default Lists;

*/