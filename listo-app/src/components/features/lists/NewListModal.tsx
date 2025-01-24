type NewListModalProps = {
  closeModal?: () => void;
};

const NewListModal = ({ closeModal }: NewListModalProps) => {
  return (
    <form className="p-4 flex flex-col gap-2">
      <h2>Créer une nouvelle liste</h2>
      <label htmlFor="listName" className="sr-only">
        Nom de la liste
      </label>
      <input
        id="listName"
        type="text"
        placeholder="Nom de la liste"
        className="input-field required"
      />
      <div>
        <button type="button" className="btn btn-gray" onClick={closeModal}>
          Annuler
        </button>
        <button type="button">Créer</button>
      </div>
    </form>
  );
};

export default NewListModal;
