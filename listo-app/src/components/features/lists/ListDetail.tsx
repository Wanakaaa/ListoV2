import { useParams } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";
import NotFound from "../../../pages/NotFound";
import { ShoppingList } from "../../../data/modelShoppingList";


const ListDetail = () => {
  // REtrieve the list ID from the URL parameters
  const params = useParams<{listId: string}>()
    // params est un objet : {listId: 'list_1738327731254_93475'}
    // console.log("params : ", params)
    // params.listId est une string : list_1738327731254_93475
    // console.log("params.listId : ", params.listId)

  // Custom hook to retieve shopping lists from localStorage
  const { getItemCustom } = useLocalStorage("shoppingLists")

  const storedLists = getItemCustom()
  const matchingList = storedLists.filter((list: ShoppingList) => list.id === params.listId)

  if (matchingList.length === 0) {
    return <NotFound />
  }

  const currentList = matchingList[0]

  return (
    <div>
      List {currentList.listName}
    </div>
  );
}

export default ListDetail
