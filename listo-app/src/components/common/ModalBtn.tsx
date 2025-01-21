import { useRef } from "react";
import Dialog from "./Dialog";

type ModalBtnProps = {
  dialogContent: React.ReactNode;
  className?: string;
  btnName: string;
};

const ModalBtn = ({ dialogContent, className, btnName }: ModalBtnProps) => {
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
      <button onClick={toggleDialog} className={className}>
        {btnName}
      </button>

      <Dialog ref={dialogRef} toggleDialog={toggleDialog}>
        {dialogContent}
      </Dialog>
    </>
  );
};

export default ModalBtn;
