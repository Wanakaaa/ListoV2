type CreateListFormProps = {
  closeDialog: () => void
};

export default function CreateListForm({ closeDialog }: CreateListFormProps) {
  return (
    <form>
      <h2>Créer une nouvelle liste</h2>
      <input type="text" placeholder="Nom de la liste" />
      <div>
        <button type="button" onClick={closeDialog}>
          Annuler
        </button>
        <button type="button">Créer</button>
      </div>
    </form>
  );
}