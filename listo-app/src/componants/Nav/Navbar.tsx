import { useNavigate } from "react-router-dom";

type NavbarProps = {
    setSelectedOption : (option: string) => void
}

export default function Navbar({setSelectedOption}: NavbarProps) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col border-2 border-green-500 h-[50vh] justify-between">
      <div className="flex flex-col">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Listes de courses
        </button>
        <button
          onClick={() => {
            navigate("/trash");
          }}
        >
          Corbeille
        </button>
      </div>
      <div className="flex flex-col">
        <button>Aide</button>
        <button>Paramètres</button>
      </div>
    </div>
  );
}
