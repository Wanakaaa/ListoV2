import { forwardRef } from "react"

type Props = {
    children: React.ReactNode;
    toggleDialog: () => void;
}

const Dialog = forwardRef<HTMLDialogElement, Props>(({ children, toggleDialog }, ref) => {
  return (
    <dialog 
        ref={ref}
        onClick={(e) => {
            if (e.currentTarget === e.target) {
                toggleDialog()
            }
        }}
        className="p-4 border-4 border-red-700">
            <div>
                {children}
                <button onClick={toggleDialog}>Fermer</button>
            </div>
        </dialog>
  )
})

export default Dialog