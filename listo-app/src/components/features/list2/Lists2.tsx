import React, { useState } from 'react'
import ListDetail from './ListDetail2'
import { useNavigate } from 'react-router-dom'
import { ShoppingList } from '../../../data/modelShoppingList';

// controller ??

const Lists = ({ shoppingLists }: { shoppingLists: ShoppingList[] }) => {
  let navigate = useNavigate()

  function onSelectedList(listId: string) {
    navigate(`/lists/${listId}`)
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
              onSelectedList = {onSelectedList}
              />
          ))}
        </ul>)
        }
    </div>
  )
}

export default Lists