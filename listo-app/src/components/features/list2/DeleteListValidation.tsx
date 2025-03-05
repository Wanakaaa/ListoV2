import React, { useState } from "react";

const DeleteListValidation = ({ listId, onClose, onDelete }) => {

  return (
    <div>
    <h2>Supprimer une liste id : {listId} </h2>
    <p>Voulez-vous vraiment supprimer cette liste ?</p>
  
  <div className="flex justify-between border-2 border-green-400 p-4">
      <button
        className={`border-2 border-red-400 p-4 bg-blue-400`}
        onClick={onClose}
        type="button">
        Annuler
      </button>
      <button
        className={`border-2 border-red-400 p-4`}
        type="submit"
        onClick={() => onDelete(listId)}>
        Supprimer
      </button>
    </div>

  </div>

  );
};

export default DeleteListValidation;


/* 

const DeleteListValidation = ({listId, onClose, onDelete} => {

    <div>
      <h2>Supprimer une liste id :</h2>
      <p>Voulez-vous vraiment supprimer cette liste ?</p>
    
    <div className="flex justify-between border-2 border-green-400 p-4">
        <button
          className={`border-2 border-red-400 p-4 bg-blue-400`}
          onClick={onClose}
          type="button">
          Annuler
        </button>
        <button
          className={`border-2 border-red-400 p-4`}
          type="submit"
          onClick={onDelete(listId)}>
          Supprimer
        </button>
      </div>

    </div>
*/