

export type Item = {
    itemName: string,
    itemId: string,
    isChecked: boolean
}

export class ShoppingList {
    id: string;
    listName: string;
    items: Item[]

    constructor(id: string, listName: string, items: Item[]) {
        this.id = id
        this.listName = listName
        this.items = items
    }
}

