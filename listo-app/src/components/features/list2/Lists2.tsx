import React, { useState } from 'react'
import ListDetail from './ListDetail2'
import { useNavigate } from 'react-router-dom'


type List = {
  id: string;
  listName: string;
  items: string[];
}

const Lists = ({ arrayLists } : { arrayLists: List[]}) => {
  const [ selectedListId, setSelectedListId ] = useState<null | string >(null)

  const handleToggleMenu = (list: List) => {
    console.log("handleToggleMenu apppelé par:", list.id)
    console.log("Avant : selectedListId =", selectedListId);
    if (selectedListId === list.id) {
      setSelectedListId(null);
      console.log("Fermeture du menu pour", list.id);
      console.log("Fermeture du menu, selectedListId devient NULL");
    } else {
      setSelectedListId(list.id);
      console.log("Ouverture du menu pour", list.id);
    }
  };

  let navigate = useNavigate()
  const handleNavigateToList = (list : List) => {
    navigate(`/lists/${list.id}`)
  }

  const handleListNavigation = (event: React.MouseEvent<HTMLLIElement>, list: List) => {
    const target = event.target as HTMLElement
    if (target.tagName === "BUTTON") {
      console.log("clic sur ⋮ détecté")
      return
    }
    handleNavigateToList(list)
  }
  return (
    <div>
        {arrayLists.length === 0 ? (
        <div>Pas de liste pour le moment</div>
      ) : (
        <ul className="border-2 border-green-500 flex flex-col gap-2">
          {arrayLists.map((list) => (
            <ListDetail 
              list={list} 
              key={list.id} 
              onListClick={(event: React.MouseEvent<HTMLLIElement>) => 
                {handleListNavigation(event, list)
                  console.log("eventTarget: ", event.target)
                }}  
              onToggle={() => handleToggleMenu(list)}
              selectedListId = {selectedListId}
              />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Lists