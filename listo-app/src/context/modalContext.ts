import { createContext, useContext } from "react";
import { ModalContextValueType } from "../types/modalTypes";


export const modalContext = createContext<ModalContextValueType>(undefined);

export function useModalContext() {
    const modal = useContext<ModalContextValueType>(modalContext)

    if(!modal) {
        throw new Error("useModalContext must be used with a modalContext")
    }
    return modal
}
