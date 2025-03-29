import React, { useRef, ReactNode, useEffect } from "react";
import { useModalContext } from "../../context/ModalContext";

const Modal = ({ children }: { children: ReactNode }) => {
  const { closeModal } = useModalContext();

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  const handleOutsideClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <dialog ref={dialogRef} onClick={handleOutsideClick}>
        <div className="bg-orange-300 p-4 flex flex-col">{children}</div>
      </dialog>
    </>
  );
};

export default Modal;