import React, { useState } from "react";

const CreateListForm = ({ onClose, addNewList }) => {
  const [ listName, setListName ] = useState("")


  const handleContentChange = (event) => {
    setListName(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    addNewList(listName)
    setListName("")
    onClose()
  }

  return (
    <div>
      <h2>Créer une nouvelle liste</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newListName">Nom de la liste</label>
        <input
          type="text"
          id="newListName"
          placeholder="Nouvelle liste"
          className="input-field required"
          value={listName}
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
          Créer
        </button>
      </div>
      </form>

    </div>
  );
};

export default CreateListForm;
