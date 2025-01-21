import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Dialog from "../Dialog";
import Params from "../Params";

type NavbarProps = {
    selectedOption: string,
    setSelectedOption : (option: string) => void
}

export default function Navbar({selectedOption, setSelectedOption }: NavbarProps) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div className="flex flex-col border-2 border-green-500 h-[50vh] justify-between">
      <div className="flex flex-col">
        <button
        className={`${selectedOption === "lists" ? "text-primary bg-primary-light" : "hover:bg-secondary-light text-secondary"}`}
          onClick={() => {
            navigate("/")
            setSelectedOption('lists')
          }}
        >
          Listes de courses
        </button>
        <button
        className={`${selectedOption === "trash" ? "text-primary bg-primary-light" : "hover:bg-secondary-light text-secondary"}`}
          onClick={() => {
            navigate("/trash")
            setSelectedOption('trash')
          }}
        >
          Corbeille
        </button>
      </div>
      <div className="flex flex-col">
        <button
            className="hover:bg-secondary-light text-secondary"
        >Aide</button>
        <button className="hover:bg-secondary-light text-secondary" onClick={openDialog}>
        Paramètres</button>
                <Dialog isOpen={isOpen} onClose={closeDialog}>
                  <Params closeDialog={closeDialog}/>
                </Dialog>
      </div>
    </div>
  );
}
