import { useParams } from "react-router-dom"
import { listsData } from "../../data/listsData";
import NotFound from "../../pages/NotFound";

export default function List() {
    const { listId } = useParams()
    const list = listsData.find((list) => list.id === Number(listId))
    if (!list) {
        return <NotFound />
    }

  return (
    <div>List spécifique : {listId} 
        <div>{list.listName}</div>
    </div>
  )
}
