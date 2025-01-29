import { ChangeEvent, useState } from "react";
import { ShoppingList } from "../../../data/modelShoppingList";


type CreatListModalProps = {
  onClose: () => void
  onListCreated: (newList: ShoppingList) => void
}

const CreateListModal = ({ onClose, onListCreated }: CreatListModalProps) => {
  const [ value, setValue ] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    console.log("value : ", e.target.value)
  } 

    return (
        <form className="flex flex-col gap-2 p-4">
          <h2>Créer une nouvelle liste</h2>
          <label htmlFor="listName"></label>
          <input 
            id="listName"
            className="border-2 p-2 rounded-lg" 
            type="text" 
            placeholder="Nom de la liste"
            value = {value}
            onChange={handleChange}
            />
            
          <div className="flex justify-between gap-4">

            <button className="btn-gray flex-1" 
            type="button" onClick={onClose}>
              Annuler
            </button>
            <button 
            className="btn-blue flex-1"
            type="button"
            onClick={() => {
              const listId = `list_id_${Date.now()}_${Math.floor(Math.random() * 100000)}`
              const newList = new ShoppingList(listId, value, [])
              onListCreated(newList)
            }
            }>Créer</button>

          </div>

        </form>
    );
  };
  
  export default CreateListModal;
