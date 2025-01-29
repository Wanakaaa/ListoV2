import { Link } from "react-router-dom";

const Lists = ({shoppingLists}) => {
  return (
    <div>
      J'essaye de récupérer les instances de ShoppingList
        <div className="flex flex-col gap-4">{shoppingLists?.length === 0 ? <p>Aucune liste disponible</p> 
        :shoppingLists.map((list) => (
          <Link key={list.id} to={`/lists/${list.id}`}>
            <button className="w-full border-2 border-pink-500">
            <div className="flex justify-around">
                <div>{list.listName}</div>
                <div>0/{list.items.length}</div>
                <div>options</div>
              </div>
              <div>barre cheloue</div>
            </button>
          </Link>
        )) }</div>
    </div>
  )
}

export default Lists