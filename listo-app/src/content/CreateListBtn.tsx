import { useState } from "react";
import Dialog from "../componants/Dialog";
import CreateListForm from "./CreateListForm";

export default function CreateListBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openDialog} className="bg-blue-300 p-4">
        Créer une nouvelle liste
      </button>
      <Dialog isOpen={isOpen} onClose={closeDialog}>
        <CreateListForm closeDialog={closeDialog}/>
      </Dialog>
    </div>
  );
}