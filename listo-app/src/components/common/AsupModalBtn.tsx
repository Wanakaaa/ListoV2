import { useRef } from "react";
import Dialog from "./AsupDialog";

type ModalBtnProps = {
  children: (handleModalToggle: () => void) => React.ReactNode ;
  className?: string;
  btnName: string;
};

const ModalBtn = ({ children, className, btnName }: ModalBtnProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleModalToggle() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  return (
    <>
      <button onClick={handleModalToggle} className={className} >
        {btnName}
      </button>

      <Dialog ref={dialogRef} handleClose={handleModalToggle}>
        {children(handleModalToggle)}
      </Dialog>
    </>
  )
};

export default ModalBtn;


/*
import { useRef } from "react";
import Dialog from "./Dialog";

type ModalBtnProps = {
  children: any;
  className?: string;
  btnName: string;
};

const ModalBtn = ({ children, className, btnName }: ModalBtnProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }

  return (
    <>
      <button onClick={toggleDialog} className={className} >
        {btnName}
      </button>

      <Dialog ref={dialogRef} toggleDialog={toggleDialog}>
        {children(toggleDialog)}
      </Dialog>
    </>
  )
};

export default ModalBtn;

*/