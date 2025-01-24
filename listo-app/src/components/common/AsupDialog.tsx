import { forwardRef } from "react"

type DialogProps = {
    children: React.ReactNode;
    handleClose:() => void;
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(({ children, handleClose }, ref) => {
  return (
    <dialog 
        ref={ref}
        onClick={(e) => {
            if (e.currentTarget === e.target) {
                handleClose()
            }
        }}
        className="p-4 border-4 border-red-700">
            <div>
                {children}
                <button onClick={handleClose}>Fermer</button>
            </div>
        </dialog>
  )
})

export default Dialog
