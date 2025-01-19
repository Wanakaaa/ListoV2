export default function NewListButton() {
    function createNewList() {
        alert('Créer une nouvelle liste')
    }
  return (
    <div>
        <button onClick={createNewList}>Créer une nouvelle liste</button>
    </div>
  )
}
