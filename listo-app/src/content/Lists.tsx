import { Link } from "react-router-dom";
import { listsData } from "../data/listsData";

export default function Lists() {
  return (
    <div>
      <div className="flex flex-col gap-4">
        {listsData.map((list) => (
          <Link key={list.id}  to={`/lists/${list.id}`}>
          <button className="w-full border-2 border-pink-500">
            <div className="flex justify-around">
              <div>{list.listName}</div>
              <div>0/{list.items.length}</div>
              <div>options</div>
            </div>
            <div>barre cheloue</div>
          </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
