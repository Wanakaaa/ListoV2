import React, { useState } from 'react'
import ListDetail from './ListDetail2'
import { useNavigate } from 'react-router-dom'
import { ShoppingList } from '../../../data/modelShoppingList';

// View ?

const Lists = ({ shoppingLists }: { shoppingLists: ShoppingList[] }) => {

  const [ menuOpenId, setMenuOpenId] = useState<string | null>(null)

  function toggleMenuLIST(listId: string | null) {
    if (menuOpenId === listId) {
      setMenuOpenId(null)
    } else {
      setMenuOpenId(listId)
    }
  }

  return (
    <div>
        {shoppingLists.length === 0 ? (
          <div>Pas de liste à afficher</div>) :
         (<ul className="border-2 border-green-500 flex flex-col gap-2">
          {shoppingLists.map((list) => (
            <ListDetail 
              list={list} 
              key={list.id}
              toggleMenuLIST = {toggleMenuLIST} 
              menuOpenId={menuOpenId}
              />
          ))}
        </ul>)
        }
    </div>
  )
}

export default Lists