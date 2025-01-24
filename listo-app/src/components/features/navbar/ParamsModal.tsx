type ParamsModalProps = {
  onClose: () => void
}

const ParamsModal = ({ onClose }: ParamsModalProps) => {
    return (
      <div>
        <h2>Paramètres</h2>
        <p>Quelques options de configuration</p>
        <button onClick={onClose}
        className="absolute top-2 right-2 text-red-500">X</button>
      </div>
    );
  };
  
  export default ParamsModal;