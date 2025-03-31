import React, { useState } from 'react'

const SidePanelItems = ({closePanel}) => {
  const [ toggle, setToggle] = useState("popular")

  function updateToggle(id : String) {
    setToggle(id)
  }


  return (
    <div className='bg-blue-200 p-4 flex flex-col'>
      <div className='flex justify-between'>
        <h3>Ajouter des produits</h3>
        <div onClick={closePanel}>X</div>
      </div>
      <form className='border-2 border-blue-300' action="">
        <label htmlFor="item"></label>
        <input id="item" type="text" placeholder='protéines de soja'/>
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