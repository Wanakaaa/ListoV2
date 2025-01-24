
type ParamsModalProps = {
  closeModal: () => void;
};

const ParamsModal = ({ closeModal }: ParamsModalProps) => {
  return (
    <div>
      <h2>Paramètres</h2>
      <button onClick={closeModal}>Fermer</button>
    </div>
  );
};

export default ParamsModal;