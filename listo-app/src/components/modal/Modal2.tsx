import { useRef, useEffect } from 'react'
import { useModalContext } from '../../context/modalContext'
import { CreateModalContent, DeleteModalContent } from './ModalContents'
import { ModalType } from '../../types/modalTypes'

const Modal2 = () => {
    const { isOpen, modalType, closeModal } = useModalContext()
    const dialRef = useRef<HTMLDialogElement | null>(null)

    const MODAL_COMPONENTS = {
        add: CreateModalContent,
        delete : DeleteModalContent      
    }
    const ModalComponent: React.FC | null = modalType && modalType in MODAL_COMPONENTS ? MODAL_COMPONENTS[modalType as ModalType] : null

    useEffect(() => {
        if (!dialRef.current) {
            return
        }
        if (isOpen) {
            dialRef.current?.showModal()
        } else {
            dialRef.current?.close()
        }
    }, [isOpen])

    const handleOutsideClick = (event : React.MouseEvent<HTMLDialogElement>) => {
        if (event.target === event.currentTarget) {
            closeModal()
        } 
    }

  return (
    <>
        <dialog ref={dialRef} onClick={handleOutsideClick} >
            <div className='bg-orange-300 p-4 flex flex-col'>
                <div className='border-2 border-blue-300 p-4'>
                    {ModalComponent && <ModalComponent/>}
                </div>
            </div>
        </dialog>
    </>
  )
}

export default Modal2

