import React from 'react'
import ListDetail from './ListDetail2'
import { useNavigate } from 'react-router-dom'


const Lists = ({arrayLists}) => {
  let navigate = useNavigate()
  const handleNavigateToList = (list) => {
    navigate(`/lists/${list.id}`)
  }
  return (
    <div>
        {arrayLists.length === 0 ? (
        <div>Pas de liste pour le moment</div>
      ) : (
        <ul className="border-2 border-green-500 flex flex-col gap-2">
          {arrayLists.map((list) => (
            <ListDetail 
              list={list} key={list.id} onSelectList={() => {
              handleNavigateToList(list)}}/>

          ))}
        </ul>
      )}
    </div>
  )
}

export default Lists