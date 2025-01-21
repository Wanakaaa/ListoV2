type DialogProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  };
  
  export default function Dialog({ isOpen, onClose, children }: DialogProps) {
    if (!isOpen) return null; 
  
    return (
      <dialog open className="fixed inset-0 flex justify-center items-center">
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
          className="backdrop bg-black/50 fixed inset-0 flex justify-center items-center"
        >
          <div className="bg-white p-6 rounded-lg">
            {children}
          </div>
        </div>
      </dialog>
    );
  }