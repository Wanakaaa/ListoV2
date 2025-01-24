type CreatListModalProps = {
  onClose: () => void
}

const CreateListModal = ({ onClose }: CreatListModalProps) => {
    return (
        <form className="flex flex-col gap-2 p-4">
          <h2>Créer une nouvelle liste</h2>
          <label htmlFor=""></label>
          <input className="border-2 p-2 rounded-lg" type="text" placeholder="Nom de la liste" />
          <div className="flex justify-between gap-4">
            <button className="btn-gray flex-1" 
            type="button" onClick={onClose}>
              Annuler
            </button>
            <button type="button"
            className="btn-blue flex-1" >Créer</button>
          </div>

        </form>
    );
  };
  
  export default CreateListModal;