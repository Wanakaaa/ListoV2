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
        const lists = window.localStorage.getItem(key)
        const parsedData: ShoppingList[] = lists ? JSON.parse(lists) : []
        const updatedLists = parsedData.filter((list) => list.id !== listId)
        window.localStorage.setItem(key, JSON.stringify(updatedLists))
        return updatedLists
    }

  return { setItemCustom, getItemCustom, removeItemCustom }
}

export default useLocalStorage
