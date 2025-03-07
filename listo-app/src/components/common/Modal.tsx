import React, { useState, useRef, useImperativeHandle, forwardRef, ReactNode } from 'react'

type ModalProps = {
  children: (closeModal: () => void) => ReactNode
}
export type ModalHandle = {
  openModal: () => void;
  closeModal: () => void;
};


const Modal = forwardRef<ModalHandle, ModalProps>(({children}, ref) => {
  //console.log("children :", children)
  const dialRef = useRef<HTMLDialogElement | null>(null)

  const openModal = () => {
    dialRef.current?.showModal()
  }
  const closeModal = () => {
    dialRef.current?.close()
  }

  useImperativeHandle(ref, () => {
    return {
      openModal,
      closeModal
    }
  })

  const handleOutsideClick = (event : React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
        closeModal()
    } 
  }

  return (
    <>

      <dialog ref={dialRef} onClick={handleOutsideClick}>
      <div className='bg-orange-300 p-4 flex flex-col'>
        {children && children(closeModal)}
        </div>
      </dialog>
    </>
  )
})

export default Modal