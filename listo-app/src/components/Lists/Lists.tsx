import React, { useContext, useState } from 'react'
import { listsContext} from '../../context/listsContext'
import List from './List'


const Lists = () => {
    const { shoppingLists } = useContext(listsContext)

    return (
        <div>
          {shoppingLists.length > 0 ? (
            shoppingLists.map((list) => (
              <List key={list.id} list={list} />
            ))
          ) : (
            <p>Pas de liste pour le moment</p>
          )}
        </div>
      );
      
}

export default Lists