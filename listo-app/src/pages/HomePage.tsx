import Lists from "../components/features/lists/Lists";
import ModalBtn from "../components/common/ModalBtn";
import NewListModal from "../components/features/lists/NewListModal";

const HomePage = () => {
  return (
    <div>
      <div className="flex justify-around p-4">
        <h1 className="p-4">Vos listes de courses</h1>
        <ModalBtn
          btnName="Nouvelle liste"
          className="p-4 bg-pink-300"
          dialogContent={<NewListModal />}
        />
      </div>
      <Lists />
    </div>
  );
};

export default HomePage;
