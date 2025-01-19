import { useNavigate } from "react-router-dom";

type NavbarProps = {
    selectedOption: string,
    setSelectedOption : (option: string) => void
}

export default function Navbar({selectedOption, setSelectedOption }: NavbarProps) {
  const navigate = useNavigate();
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
        <button className="hover:bg-secondary-light text-secondary">Paramètres</button>
      </div>
    </div>
  );
}
