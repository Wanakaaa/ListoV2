import Lists from "../content/Lists";
//import CreateListBtn from "../content/CreateListBtn";
import CreateListBtn2 from "../content/CreateListBtn";

export default function HomePage() {
  return (
    <div>
      <div className="flex justify-around p-4">
        <h1 className="p-4">Vos listes de courses</h1>
        <CreateListBtn2/>
      </div>
      <Lists/>
    </div>
  );
}

// <CreateListBtn/>