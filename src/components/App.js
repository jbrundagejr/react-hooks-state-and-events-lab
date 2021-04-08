import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);
  const [isDarkMode, setIsDarkMode] = useState(false)
  function darkClick(){
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={darkClick}>{isDarkMode ? "Light" : "Dark"} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
