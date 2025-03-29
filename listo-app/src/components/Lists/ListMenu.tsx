import React, { useState } from "react";
import { useMenuContext } from "../../context/MenuContext";

const ListMenu = ({ listId }: { listId: string }) => {
  const { openMenuId, toggleMenu } = useMenuContext();

  const isOpen = openMenuId === listId;

  return (
    <>
      <button
        className="border-2 border-pink-400 px-4"
        onClick={() => toggleMenu(listId)}
      >
        ⋮ Menu
      </button>
      {isOpen ? <div>Menu ouvert</div> : <div>Menu fermé</div>}
    </>
  );
};

export default ListMenu;
