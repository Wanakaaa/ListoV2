import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { useListsContext } from "../context/listsContext";
import SidePanelItems from "../components/listItems/SidePanelItems";


type List = {
  id: string;
  listName: string;
  items: string[];
};

const SelectedListPage = () => {
  // Récupérer les listes
  const { shoppingLists } = useListsContext();
  const [ isPanelOpen, setIsPanelOpen ] = useState(false)

  function openPanel() {
    // passera surement en !isPanelOpen, car la croix sur le panel devra remettre le state à false
    // car pour l'instant, le bouton ne disparait pas
    setIsPanelOpen(true)
  }

  function closePanel() {
    // passera surement en !isPanelOpen, car la croix sur le panel devra remettre le state à false
    setIsPanelOpen(false)
  }


  const listParam = useParams();
  //console.log("idParams est: ", listParam.listId);

  const foundList = shoppingLists.find(
    (list: List) => list.id === listParam.listId
  );

  return foundList ? (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
        
        <div className="flex justify-between items-center mb-6">
          <form>
            <label htmlFor="listName" className="sr-only">Nom de la liste</label>
            <input
            id="listName"
              type="text"
              placeholder={foundList.listName}
              className="text-xl font-semibold border-b border-gray-300 outline-none"
            />
          </form>
          <div className="flex gap-4 text-gray-600">
            <button title="Rechercher">🔍</button>
            <button title="Partager">🔗</button>
            <button title="Options">⋯</button>
          </div>
        </div>
  
        <div className="h-px bg-gray-300 mb-8" />
  
        <div className="text-center">
          <div className="text-6xl mb-6">🥑</div>
          <p className="text-lg font-medium mb-2">Qu'avez-vous besoin d'acheter ?</p>
          <p className="text-gray-600 mb-6">
            Commencez à chercher des produits pour les ajouter à votre liste
          </p>
          <button
          onClick={openPanel}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            + Ajouter des produits
          </button>
        </div>
          
      </div>
      {isPanelOpen && <SidePanelItems closePanel={closePanel}></SidePanelItems>}
    </div>
  ) : (
    <NotFound />
  );
};

export default SelectedListPage;


// button ajouter des produits devra être un composant 
// pour pouvoir être masqué quand son état passe à true.
