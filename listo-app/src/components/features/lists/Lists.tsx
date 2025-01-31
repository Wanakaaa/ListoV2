import { Link } from "react-router-dom";

type ListsProps = {
  shoppingLists: { id: string; listName: string; items: any[] }[];
  // Array of shoppingLists passed as a prop
};

const Lists = ({ shoppingLists }: ListsProps) => {
  
  return (
    <div className="flex flex-col gap-4">
      {shoppingLists?.length === 0 ? (
        <p>Aucune liste disponible</p>
      ) : (
        shoppingLists.map((list) => (
          <Link key={list.id} to={`/lists/${list.id}`}>
            <div className="w-full border-2 border-pink-500">
              <div className="flex justify-around">
                <div>{list.listName}</div>
                <div>0/{list.items.length}</div>
                <div>options
                  <button
                  type="button"
                  onClick={() => {console.log('clic')}}>Remove List</button>
                </div>
              </div>
              <div>barre cheloue</div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Lists;
