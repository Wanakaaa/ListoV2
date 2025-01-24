import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../common/Modal";
import CreateList2 from "./ParamsModal";

type NavbarProps = {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
};
const Navbar = ({ selectedOption, setSelectedOption }: NavbarProps) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div className="flex flex-col border-2 border-green-500 h-[50vh] justify-between">
      <div className="flex flex-col">
        <button
          className={`${
            selectedOption === "lists"
              ? "text-primary bg-primary-light"
              : "hover:bg-secondary-light text-secondary"
          }`}
          onClick={() => {
            navigate("/");
            setSelectedOption("lists");
          }}
        >
          Listes de courses
        </button>
        <button
          className={`${
            selectedOption === "trash"
              ? "text-primary bg-primary-light"
              : "hover:bg-secondary-light text-secondary"
          }`}
          onClick={() => {
            navigate("/trash");
            setSelectedOption("trash");
          }}
        >
          Corbeille
        </button>
      </div>
      <div className="flex flex-col">
        <button className="hover:bg-secondary-light text-secondary">
          Aide
        </button>
        <Modal
          btnName="Params"
          className={"hover:bg-secondary-light text-secondary"}
          render={({ onClose }) => <CreateList2 onClose={onClose} />}
        />
      </div>
    </div>
  );
};

export default Navbar;
