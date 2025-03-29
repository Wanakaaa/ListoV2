import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../Modal/Modal";

type NavbarProps = {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
};
const Navbar = ({ selectedOption, setSelectedOption }: NavbarProps) => {
  const navigate = useNavigate();

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
            console.log("clic sur bouton navbar");
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
            console.log("clic sur bouton trash");
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
      </div>
    </div>
  );
};

export default Navbar;
