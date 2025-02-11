import React from 'react'

const ListDetail = ({list: {id, listName, items}, onSelectList}) => {
  return (
    <li className="border-2 border-purple-500 p-4"
    onClick={onSelectList}>
    <div className='border-2 flex justify-between'>
      <h5 className='p-4'>{listName}</h5>
      <div className='flex w-1/2 border border-blue-600 justify-end gap-2'>
        <div className='p-4'>item/{items.length}</div>
        <button className='p-4'>⋮</button>
      </div>
    </div>
    <div>Barre bizzare</div>
  </li>
  )
}

export default ListDetail