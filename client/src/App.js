/**
 * Dependencies
 */

import React from 'react';
import Board from './components/Board';
import ClearBoardBtn from './components/ClearBoardBtn';

/**
 * Define component
 */

function App() {
  return (
    <div className="App">
      <ClearBoardBtn />
      <Board />
    </div>
  );
}

/**
 * Export component
 */

export default App;
