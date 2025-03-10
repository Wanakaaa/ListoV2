import { useRef, useEffect} from "react";


const ListMenu = ({ onClose }: {onClose: (listId: string | null) => void }) => {

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // si menuRef existe (est affiché) ET l’élément cliqué (event.target) n'est pas DANS le menu (menuRef.current)
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          //  console.log("Clic en dehors, on ferme !");
            onClose(null)
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      //   console.log("Suppression de l'écouteur de clic");
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div ref={menuRef}
      onClick={(event) => event.stopPropagation()}
      className="relative"
    >
      <div className="flex flex-col absolute right-0 p-2 w-48 bg-white shadow-lg border-2">
        <button className="hover:bg-sky-700 p-2">Supprimer</button>
        <button className="hover:bg-sky-700 p-2">Renommer</button>
      </div>
    </div>
  ) 
};

export default ListMenu;
