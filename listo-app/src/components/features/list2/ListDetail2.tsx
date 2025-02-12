import { useState } from "react";
import ListMenu from "./ListMenu";
import Modal2 from "../../modal/Modal2";

type List = {
  id: string;
  listName: string;
  items: string[];
};

const ListDetail = ({
  list,
  onListClick,
  onToggle,
  selectedListId,
}: {
  list: List;
  onListClick: (event: React.MouseEvent<HTMLLIElement>) => void;
  onToggle: () => void;
  selectedListId: string | null;
}) => {

  const [ isModalOpen, setIsModalOpen ] = useState(false)

  const onClose = () => {
    setIsModalOpen(false)
}

  const actions = [
    {
      id: "1",
      label: "supprimer",
      execute: (listId: string) => {
        console.log(`suppression de la liste ${list.id}`)
        setIsModalOpen(true);
      },
    },
    {
      id: "2",
      label: "rename",
      execute: (listId: string) => {
        console.log(`renommage de la liste ${list.id}`);
      },
    },
  ];

  return (
    <li
      className="border-2 border-purple-500 p-4"
      onClick={(event) => {
        console.log("Clic sur la liste détecté");
        onListClick(event);
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
              console.log("Clic sur ⋮, onToggle() doit être appelé");
              onToggle();
            }}
          >
            ⋮
          </button>

        </div>
      </div>
      <div className="relative border-2 border-green-400">Barre bizzare
      {selectedListId === list.id ? (
            <ListMenu listId={list.id} onClose={onToggle} actions={actions} />
          ) : null}
      </div>
      {isModalOpen && (
  <Modal2 isOpen={isModalOpen} onClose={onClose}>
    <p className="text-center p-2">Voulez-vous vraiment supprimer cette liste ?</p>
    <div className="flex justify-around">
      <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>Annuler</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => console.log("Suppression confirmée")}>Confirmer</button>
    </div>
  </Modal2>
)}
    </li>
  );
};

export default ListDetail;
