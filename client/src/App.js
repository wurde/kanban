/**
 * Dependencies
 */

import React, { useState, useEffect } from "react";
import store from "store2";
import Board from "./components/Board";
import ClearBoardBtn from "./components/ClearBoardBtn";
import data from "./data/default.json";

/**
 * Define component
 */

function App() {
  const [lists, setLists] = useState([]);

  function updateLists(listData) {
    store.set("lists", listData);
    setLists(listData);
  }

  useEffect(() => {
    const listData = store.get("lists") || data;
    setLists(listData);
  }, []);

  return (
    <div className="App">
      <ClearBoardBtn updateLists={updateLists} />
      <Board lists={lists} updateLists={updateLists} />
    </div>
  );
}

/**
 * Export component
 */

export default App;
