import React from 'react'
import { FcFullTrash } from "react-icons/fc";
import { IoIosColorWand } from "react-icons/io";

const Lineitems = ({item, handleChange, handleDelete, handleMagic}) => {
  return (
    <div>
      <li
              className={`item ${item.clicked ? "highlight" : ""}`}
            >
              <input
                type="checkbox"
                onChange={() => handleChange(item.id)}
                checked={item.checked}
              />
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleChange(item.id)}
              >
                {item.item}
              </label>
              <IoIosColorWand
                role="button"
                onClick={() => handleMagic(item.id)}
              />
              <FcFullTrash
                role="button"
                onClick={() => handleDelete(item.id)}
              />
            </li>
    </div>
  )
}

export default Lineitems
