import { ShoppingList } from "../../../data/modelShoppingList";

const useLocalStorage = (key: string) => {
  // Récupérer les listes du localStorage
  const getItemCustom = () => {
    try {
      const storedLists = localStorage.getItem(key);
      if (!storedLists) {
        console.warn("Aucune donnée trouvée dans localStorage, on retourne []");
        return [];
      }

      const parsedData = JSON.parse(storedLists);
      if (!Array.isArray(parsedData)) {
        throw new Error("Les données dans localStorage ne sont pas un tableau valide.");
      }

      return parsedData.map(
        (obj: { id: string; listName: string; items: any[] }) =>
          new ShoppingList(obj.id, obj.listName, obj.items)
      );
    } catch (error) {
      console.error("Erreur dans getItemCustom :", error);
      return [];
    }
  };

  // Mettre à jour les données dans localStorage
  const setItemCustom = (updatedLists: ShoppingList[]) => {
    try {
      if (!Array.isArray(updatedLists)) {
        throw new Error("Données invalides");
      }
      const stringifiedLists = JSON.stringify(updatedLists);
      localStorage.setItem(key, stringifiedLists);
    } catch (error) {
      console.error("Erreur dans setItemCustom :", error);
    }
  };

const removeItemCustom = (listId: string) => {
  try {
    const lists = getItemCustom()
    const filteredLists = lists.filter((list) => list.id !== listId)
    setItemCustom(filteredLists)
    return filteredLists
  } catch (error) {
    console.error("Erreur dans removeItemCustom", error)
    return []
  }
}

  return { getItemCustom, setItemCustom, removeItemCustom};
};

export default useLocalStorage;