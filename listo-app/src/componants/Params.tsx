type ParamsProps = {
    closeDialog: () => void
  };

export default function Params({ closeDialog }: ParamsProps) {
  return (
    <div>
        <h2>Les paramètres</h2>
        <button type="button" onClick={closeDialog}>Fermer</button>
    </div>
  )
}
