import { useRef } from 'react'

type ModalProps = {
  btnName: string,
  className?: string,
  render: (props: {onClose: () => void }) => React.ReactNode
  // callback function that return the modal content
  // onClose() will be used to close d=the modal
}

const Modal = ({ btnName, className, render }: ModalProps) => {
  // Ref to the <dialog> to control modal visibility
  const dialogRef = useRef<HTMLDialogElement>(null);

  // open/close the modal
  const toggleModal = () => {
    if (!dialogRef.current) {
        return
    }
    dialogRef.current.hasAttribute("open")
    ? dialogRef.current.close() : dialogRef.current.showModal()
  }

  return (
    <div>
      <button type="button" onClick={toggleModal} className={className}>
        {btnName}
      </button>

      <dialog ref={dialogRef} className="rounded-lg bg-white shadow-lg"
      onClick={(e) => {
        if (e.currentTarget === e.target) {
            toggleModal()
        }
      }}>
        {render({ onClose: toggleModal })}
      </dialog>
    </div>
  );
};

export default Modal;