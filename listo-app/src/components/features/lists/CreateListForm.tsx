type CreateListFormProps = {
  closeDialog: () => void
};

const CreateListForm = ({ closeDialog }: CreateListFormProps) => {
  return (
    <form className="flex flex-col gap-2">
      <h2>Créer une nouvelle liste</h2>
      <input className="p-2 border-2 border-gray-200 rounded-lg bg-gray-50" type="text" placeholder="Nom de la liste" />
      <div className="flex justify-between gap-4">
        <button className="flex justify-center flex-1 px-5 py-2.5 border-2 border-gray-200 rounded-lg" type="button" onClick={closeDialog}>
          Annuler
        </button>
        <button className="flex justify-center flex-1  bg-blue-100 px-5 py-2.5 border-2 border-gray-200 rounded-lg" type="button">Créer</button>
      </div>
    </form>
  );
}

export default CreateListForm