import NewListButton from "./NewListButton";

export default function Lists() {
  return (
    <div>
      <div className="flex justify-around">
        <h1>Vos listes de courses</h1>
        <NewListButton />
      </div>
    </div>
  );
}
