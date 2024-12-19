import React from 'react'

import Lineitems from './Lineitems';

const ItemsList = ({items, handleChange, handleDelete, handleMagic}) => { 
  return (
    <div>
      <ul>
          {items.map((item) => (
            <Lineitems
            item={item}
            key={item.id}
            handleChange={handleChange}
            handleDelete={handleDelete}
            handleMagic={handleMagic}/>
          ))}
        </ul>
    </div>
  )
}

export default ItemsList
