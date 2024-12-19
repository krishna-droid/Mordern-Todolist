import React from "react";
import ItemsList from "./ItemsList";

const Content = ({ items, handleChange, handleDelete, handleMagic }) => {
  return (
    <main>
      {items.length ? (
        <ItemsList
          items={items}
          key={items.id}
          handleChange={handleChange}
          handleDelete={handleDelete}
          handleMagic={handleMagic}
        />
      ) : (
        <p className="emptyScreen">Your List is Empty</p>
      )}
    </main>
  );
};

export default Content;
