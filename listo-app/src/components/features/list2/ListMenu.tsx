import { useRef, useEffect, useState } from "react";


const ListMenu = ({
  actions,
  onClose,
}: {
  onClose: () => void;
  actions: { id: string; label: string; execute: () => void }[];
}) => {

  const menuRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // si menuRef existe (est affiché) ET l’élément cliqué (event.target) n'est pas DANS le menu (menuRef.current)
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        //    console.log("Clic en dehors, on ferme !");
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      //   console.log("Suppression de l'écouteur de clic");
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  
  const handleActionClick = (action: { id: string; execute: () => void }) => {
    action.execute()
    onClose()
  }


  return (
    <div
      ref={menuRef}
      onClick={(event) => {
        event.stopPropagation();
        console.log("Clic dans le menu détecté !");
      }}
      className="absolute right-0 top-full mt-1 w-48 bg-white shadow-lg border-2 border-red-500 p-2 rounded-lg"
    >
      <div className="flex flex-col">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={() => {
              handleActionClick(action)
            }}
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListMenu;

/*
import React, { useRef, useEffect } from "react";

type ListMenuProps = {
  listId: string;
  onClose: () => void;
};

const ListMenu = ({
  listId,
  onClose,
  actions,
}: {
  listId: string;
  onClose: () => void;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // si menuRef existe (est affiché) ET l’élément cliqué (event.target) n'est pas DANS le menu (menuRef.current)
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        console.log("Clic en dehors, on ferme !");
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      console.log("Suppression de l'écouteur de clic");
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      onClick={(event) => {
        event.stopPropagation();
        console.log("Clic dans le menu détecté !");
      }}
      className="absolute right-0 top-full mt-1 w-48 bg-white shadow-lg border-2 border-red-500 p-2 rounded-lg"
    >
      <div className="flex flex-col">
        {actions.map((action) => (
          <button key={action.id} onClick={() => 
          
          action.execute()}>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListMenu;
 */
