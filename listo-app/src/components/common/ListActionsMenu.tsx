import { useRef, useEffect } from "react";

type ListActionsMenuProps = {
  isOpen: string | null;
  onToggle: (listId: string | null) => void;
  handleOpenModal: (listId: string | null) => void;
  options: { id: string; label: string; execute: (listId: string) => void }[];
  listId: string
}

const ListActionsMenu = ({ isOpen, onToggle, handleOpenModal, options, listId}: ListActionsMenuProps) => {


  // null au départ car le JSX n'est pas encore rendu
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) {
     // si le dom a pas encore chargé la div, on return pour stopper l'exécution et pour éviter les erreurs
      return
    }

    const handleClick = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        onToggle(null)
      }
    }
    document.addEventListener("click", handleClick)
    return () => {
      document.removeEventListener("click", handleClick);
    }
  }, [isOpen])

  return (
    <div 
    id='menuActions'
      ref={menuRef} 
      className="bg-pink-400 flex flex-col p-4" 
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      {options.map((option) => (
        <button key={option.id} type="button"
        onClick={(e) => {
          console.log(`🛠 Exécution de l'action : ${option.label}`)
          option.execute(listId)
        }}>{option.label}</button>
      ))}
    </div>
  );
};

export default ListActionsMenu;