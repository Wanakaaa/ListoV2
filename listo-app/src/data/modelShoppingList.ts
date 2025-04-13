

export type Item = {
    itemName: string,
    itemId: string,
    isChecked: boolean,
    quantity: number,
    category?: string,
    createdAt: string,
    type?: string,
    price?: number,
    unity?: string,
    description?: string,
    picture?: string
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

