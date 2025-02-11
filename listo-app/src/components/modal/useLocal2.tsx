import { ShoppingList } from "../../data/modelShoppingList"
// Custom hook for interacting with LocalStorage

const useLocal2 = (key: string) => {

    const getItemCustom = () => { 
        try {
            const item = window.localStorage.getItem(key)
            console.log("📥 Données brutes récupérées depuis localStorage :", item);
            const parsedData = item ? JSON.parse(item) : []
            console.log("📤 Données après parsing :", parsedData);
            return parsedData.map(obj => new ShoppingList(obj.id, obj.listName, obj.items));
        } catch (error) {
            console.log(error);
            return [];
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

export default useLocal2
