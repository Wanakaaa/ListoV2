import Lists from "../components/features/lists/Lists";
import Modal from "../components/common/Modal";
import CreateList1 from "../components/features/lists/CreateListModal";

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-around p-4">
        <h1 className="p-4">Vos listes de courses</h1>
        <Modal
          btnName="Nouvelle liste"
          className="bg-blue-500 p-4"
          render={({ onClose }) => <CreateList1 onClose={onClose} />}
        />
      </div>
      <Lists />
    </div>
  );
};

export default HomePage;
