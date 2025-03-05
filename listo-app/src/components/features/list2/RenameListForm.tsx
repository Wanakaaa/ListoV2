import React, { useState } from "react";

const RenameListForm = ({ listId, onClose }) => {
  const [ newListName, setNewListName ] = useState("")


  const handleContentChange = (event) => {
    setNewListName(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Renommer la liste ${listId} en : ${newListName}`); 
    setNewListName("")
    onClose()
  }

  return (
    <div>
      <h2>Renommer une liste</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newListName">Nom de la liste</label>
        <input
          type="text"
          id="newListName"
          placeholder="Nouvelle liste"
          className="input-field required"
          value={newListName}
          onChange={handleContentChange}
        />
              <div className="flex justify-between border-2 border-green-400 p-4">
        <button
          className={`border-2 border-red-400 p-4 bg-blue-400`}
          onClick={onClose}
          type="button">
          Annuler
        </button>
        <button
          className={`border-2 border-red-400 p-4`}
          type="submit">
          Renommer
        </button>
      </div>
      </form>

    </div>
  );
};

export default RenameListForm;
