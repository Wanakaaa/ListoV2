import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLocalStorage from "../lists/useLocalStorage";
import NotFound from "../../../pages/NotFound";

type List = {
  id: string;
  listName: string;
  items: string[];
};

const SelectedListPage = () => {
  const listParam = useParams();
  console.log("idParams est: ", listParam.listId);

  const [selectedList, setSelectedList] = useState<List | null>(null);

  const { getItemCustom } = useLocalStorage("shoppingLists");

  const findSelectedList = () => {
    const shoppingLists: List[] = getItemCustom();
    const foundList = shoppingLists.find(
      (list: List) => list.id === listParam.listId
    );
    if (!foundList) {
      setSelectedList(null);
      return;
    }
    setSelectedList(foundList);
  };

  useEffect(() => {
    findSelectedList();
  }, [listParam.listId]);

  return selectedList ? (
    <div> Test page de la liste : {selectedList.listName}</div>
  ) : (
    <NotFound />
  );
};

export default SelectedListPage;
