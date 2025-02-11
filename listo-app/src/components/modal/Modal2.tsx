import { DialogHTMLAttributes, useRef, useEffect } from 'react'

type ModalProps = {
    isOpen : boolean,
    onClose : () => void,
    children?: React.ReactNode
}

const Modal2 = ({isOpen, onClose, children} : ModalProps) => {
    const dialRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        if (isOpen) {
            dialRef.current?.showModal()
        } else {
            dialRef.current?.close()
        }
    }, [isOpen])

    const closeOnOutsideClick = (event : React.MouseEvent<HTMLDialogElement>) => {
        if (event.target === event.currentTarget) {
            onClose()
        } 
    }

  return (
    <>
        <dialog 
        onClose={onClose}
        onClick={(event) => {closeOnOutsideClick(event)}}
        ref={dialRef}>
            <div className='bg-orange-300 p-4 flex flex-col'>
                <div className='border-2 border-blue-300 p-4'>{children}</div>
            </div>
        </dialog>
    </>
  )
}

export default Modal2