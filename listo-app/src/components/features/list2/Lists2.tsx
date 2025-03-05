import React, { useState } from 'react'
import ListDetail from './ListDetail2'
import { useNavigate } from 'react-router-dom'
import { ShoppingList } from '../../../data/modelShoppingList';


const Lists = ({ shoppingLists }: { shoppingLists: ShoppingList[] }) => {

  return (
    <div>
        {shoppingLists.length === 0 ? (
          <div>Pas de liste à afficher</div>) :
         (<ul className="border-2 border-green-500 flex flex-col gap-2">
          {shoppingLists.map((list) => (
            <ListDetail 
              list={list} 
              key={list.id} 
              />
          ))}
        </ul>)
        }
    </div>
  )
}

export default Lists

/* import React, { useState } from 'react'
import ListDetail from './ListDetail2'
import { useNavigate } from 'react-router-dom'


type List = {
  id: string;
  listName: string;
  items: string[];
}

const Lists = ({ arrayLists, onOpenDelete, onOpenRename} : { arrayLists: List[]}) => {

  return (
    <div>
        {arrayLists.length === 0 ? (
        <div>Pas de liste pour le moment</div>
      ) : (
        <ul className="border-2 border-green-500 flex flex-col gap-2">
          {arrayLists.map((list) => (
            <ListDetail 
              list={list} 
              key={list.id} 
              onOpenDelete={onOpenDelete}
              onOpenRename={onOpenRename}
              />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Lists */