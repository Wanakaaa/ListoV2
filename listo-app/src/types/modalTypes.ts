import { ShoppingList } from "../data/modelShoppingList";

export type ModalStateType = {
    isOpen: boolean;
    modalType: string | null;
    listId: string | null;
};

export type ModalContextType = ModalStateType & {
    onListCreated?: (newList: ShoppingList) => void,
    onListDeleted?: (listId: string) => void,
    openModal: (
        type: string, 
        id?: string | null,
        onListCreated?: (newList: ShoppingList) => void,
       onListDeleted?: (listId: string) => void) 
       => void,
    closeModal: () => void;
}

export type ModalContextValueType = ModalContextType | undefined

export type ModalType = "add"