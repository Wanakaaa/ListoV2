import { ShoppingList } from "../../../data/modelShoppingList"
// Custom hook for interacting with LocalStorage

const useLocalStorage = (key: string) => {

    // Retrieves shopping lists from localStorage
    const getItemCustom = () => { 
        try {
            const item = window.localStorage.getItem(key);
           // console.log("Données brutes récupérées du localStorage :", item);
    
            const parsedData = item ? JSON.parse(item) : [];
            //console.log("Après parsing JSON :", parsedData);
    
            return parsedData.map((obj: { id: string; listName: string; items: any[] }) => {
           //     console.log("Conversion en ShoppingList :", obj);
                return new ShoppingList(obj.id, obj.listName, obj.items);
            });
        } catch (error) {
            console.log("Erreur dans getItemCustom :", error);
            return [];
        }
    };

    // Save a new shopping list to localStorage
    const setItemCustom = (updatedLists: ShoppingList[]) => {
        try {
           // console.log("Avant ajout, existingItems :", updatedLists);
            window.localStorage.setItem(key, JSON.stringify(updatedLists)); // Stocker proprement
        } catch (error) {
            console.log("Erreur dans setItemCustom :", error);
        }
    };

    const removeItemCustom = (listId: string) => {

    }

  return { setItemCustom, getItemCustom, removeItemCustom }
}

export default useLocalStorage


/* OG, marche avec HomePage : 
import { ShoppingList } from "../../../data/modelShoppingList"
// Custom hook for interacting with LocalStorage

const useLocalStorage = (key: string) => {

    // Retrieves shopping lists from localStorage
    const getItemCustom = () => { 
        try {
            const item = window.localStorage.getItem(key)
         //   console.log("item before parsed: ", item)
            const parsedData = item ? JSON.parse(item) : []
          //  console.log("parsed items :", parsedData)
            // Convert plain objects into ShoppingList instances
            const itemsInstances = parsedData.map(
                (obj: { id: string; listName: string; items: any[] }) => 
                new ShoppingList(obj.id, obj.listName, obj.items))
            return itemsInstances
        } catch (error) {
            console.log(error)
            return []
        }
    }

    // Save a new shopping list to localStorage
    const setItemCustom = (value: unknown) => {
        try {
            const existingItems = getItemCustom()
            const updatedItems = [...existingItems, value]
            window.localStorage.setItem(key, JSON.stringify(updatedItems))
        } catch (error) {
            console.log(error)
        }
    }

    const removeItemCustom = (listId: string) => {
        // je vais récupérer un tableau contenant les instances de ShoppingList
        const lists = window.localStorage.getItem(key)
        const parsedData = lists ? JSON.parse(lists) : []
        console.log("remove item - list: ", lists)
        console.log("remove item - parsedData ", parsedData)
        // Filtrer celles qui ne correspondent pas à l'id de la liste à supprimer
        console.log('id recu pour suppression : ', listId)
        // Crée un tableau filteredLists sans la liste sur laquelle on est 
        const filteredLists = parsedData.filter((list: ShoppingList) => list.id !== listId) 
        console.log("filtered lists avant: ", filteredLists)
        //convertir filteredLists en JSON
        window.localStorage.setItem(key, JSON.stringify(filteredLists))
        console.log("listes restantes après :", filteredLists )
        return filteredLists
    }

  return { setItemCustom, getItemCustom, removeItemCustom }
}

export default useLocalStorage

*/