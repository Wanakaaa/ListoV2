import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../../pages/NotFound";
import { useListsContext } from "../../../context/listsContext";

type List = {
  id: string;
  listName: string;
  items: string[];
};

const SelectedListPage = () => {

  // Récupérer les listes 
  const { shoppingLists } = useListsContext()

  const listParam = useParams();
  //console.log("idParams est: ", listParam.listId);

    const foundList = shoppingLists.find(
      (list: List) => list.id === listParam.listId
    );


  return foundList ? (
    <div> Test page de la liste : {foundList.listName}</div>
  ) : (
    <NotFound />
  );
};

export default SelectedListPage;
