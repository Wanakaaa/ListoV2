import { ShoppingList } from "../../../data/modelShoppingList"
// Custom hook to save data in LocalStorage

const useLocalStorage = (key: string) => {

    const getItem = () => { 
        try {
         //   console.log("📥 Avant parsing, données brutes de localStorage :", window.localStorage.getItem(key));
            const item = window.localStorage.getItem(key)
            const parsedData = item ? JSON.parse(item) : []
         //   console.log("📦 Après parsing, tableau récupéré :", parsedData);
         //   console.log("🔄 Listes transformées en instances ShoppingList :", parsedData.map((obj: { id: string; listName: string; items: any[] })=> new ShoppingList(obj.id, obj.listName, obj.items)));
    // on prend chaque obj du tableau parsedData et on le transforme en une instance de ShoppingList
            return parsedData.map((obj: { id: string; listName: string; items: any[] }) => 
                new ShoppingList(obj.id, obj.listName, obj.items))
        } catch (error) {
            console.log(error)
            return []
        }
    }

    const setItem = (value: unknown) => {
        try {
        //    console.log("🛠 Avant récupération des listes, nouvelle liste reçue :", value);
            const existingItems = getItem()
        //    console.log("📥 Listes existantes avant ajout :", existingItems);
            // créer un tableau qui copie existingItems et ajouter la nouvelle liste (value)
            const updatedItems = [...existingItems, value]
        //    console.log("📝 Tableau mis à jour avant stockage :", updatedItems);
            window.localStorage.setItem(key, JSON.stringify(updatedItems))
         //   console.log("✅ Données enregistrées dans localStorage !");
        } catch (error) {
            console.log(error)
        }
    }

  return { setItem, getItem }
}

export default useLocalStorage