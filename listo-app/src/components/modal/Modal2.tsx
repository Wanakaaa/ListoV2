/*import { useRef, useEffect } from 'react'
import { CreateModalContent, DeleteModalContent } from './ModalContents'

const Modal2 = () => {
    const dialRef = useRef<HTMLDialogElement | null>(null)

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

*/