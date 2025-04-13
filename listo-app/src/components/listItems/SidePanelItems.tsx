import React, { useState } from 'react'
import { useListsContext } from '../../context/listsContext'
import { ShoppingList } from '../../data/modelShoppingList';
import { availableItems } from '../../data/availableItems';

type SidePanelItems = {
  closePanel: () => void;
  list: ShoppingList;
}

const SidePanelItems = ({closePanel, list}: SidePanelItems) => {
const { addItem } = useListsContext()

  const [ toggle, setToggle] = useState("popular")
  const [ itemName, setItemName ] = useState("")

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      addItem(list.id, itemName);
      console.log("élément ajouté ?")
    };


  function updateToggle(id : string) {
    setToggle(id)
  }


  return (
    <div className='bg-blue-200 p-4 flex flex-col'>
      <div className='flex justify-between'>
        <h3>Ajouter des produits</h3>
        <div onClick={closePanel}>X</div>
      </div>
      <form className='border-2 border-blue-300' onSubmit={handleSubmit}>
        <label htmlFor="item"></label>
        <input id="item" type="text" placeholder='protéines de soja' onChange={handleContentChange}/>
        <button type='submit'>Ajouter</button>
      </form>
      <div>
        <ul className='flex justify-between'>
          <li className='bg-purple-400' onClick={() => updateToggle("popular")}>Populaire</li>
          <li className='bg-purple-400' onClick={() => updateToggle("recent")}>Récent</li>
        </ul>

        {toggle === "popular" && 
        <ul className="content-popular flex flex-col bg-white border-2 border-blue-300">
          
          <li>populaire 1</li>
          <li>populaire 2</li>
          <li>populaire 3</li>
        </ul>}

        {toggle === "recent" && 
        <ul className="content-recent flex flex-col bg-white border-2 border-blue-300">
          <li>récent 1</li>
          <li>récent 2</li>
          <li>récent 3</li>
        </ul>}

      </div>
    </div>
  )
}

export default SidePanelItems