import React, { useRef, useEffect } from "react";

type ListMenuProps = {
  listId: string;
  onClose: () => void;
};

const ListMenu = ({
  listId,
  onClose,
  actions,
}: {
  listId: string;
  onClose: () => void;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // si menuRef existe (est affiché) ET l’élément cliqué (event.target) n'est pas DANS le menu (menuRef.current)
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        console.log("Clic en dehors, on ferme !");
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      console.log("Suppression de l'écouteur de clic");
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      onClick={(event) => {
        event.stopPropagation();
        console.log("Clic dans le menu détecté !");
      }}
      className="absolute right-0 top-full mt-1 w-48 bg-white shadow-lg border-2 border-red-500 p-2 rounded-lg"
    >
      <div className="flex flex-col">
        {actions.map((action) => (
          <button key={action.id} onClick={() => 
          
          action.execute()}>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListMenu;

//"absolute right-0 mt-2 w-48 bg-white shadow-lg border p-2 "
/*<p>Menu pour la liste {listId}</p>
<button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Renommer</button>
<button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Supprimer</button> */


//{isModalOpen === true ? <Modal2/>}