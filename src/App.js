import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Additem from "./Additem";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState(() => {
    const todo_list = localStorage.getItem("todo_list");
    return todo_list ? JSON.parse(todo_list) : [];
  });
  const [newItem, setNewItem] = useState("");
  const [search, SetSearch] = useState("");

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleChange = (id) => {
    const newList = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newList);
    localStorage.setItem("todo_list", JSON.stringify(newList));
  };

  const handleDelete = (id) => {
    const newList = items.filter((item) => item.id !== id);
    setItems(newList);
    localStorage.setItem("todo_list", JSON.stringify(newList));
  };

  const handleMagic = (id) => {
    const newList = items.map((item) =>
      item.id === id ? { ...item, clicked: !item.clicked } : item
    );
    setItems(newList);
    localStorage.setItem("todo_list", JSON.stringify(newList));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    //addItem
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="To do List" />
      <Additem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
      search ={search}
      SetSearch={SetSearch}
      />
      <Content
        items={items.filter(item=> ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleChange={handleChange}
        handleDelete={handleDelete}
        handleMagic={handleMagic}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
