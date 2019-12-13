/**
 * Dependencies
 */

import React from 'react';
import List from './List';
import dataExample from '../data/example.json';

/**
 * Define styles
 */

const BoardStyle = {
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflowX: 'auto',
  overflowY: 'hidden',
  padding: '15px',
  marginBottom: '5px',
  whiteSpace: 'nowrap',
  userSelect: 'none',
};

/**
 * Define component
 */

function Board() {
  return (
    <Board className="board" style={BoardStyle}>
      {dataExample.lists.map((list, i) => 
        <List key={i} title={list.title} cards={list.cards} />
      )}
    </Board>
  );
};

/**
 * Export component
 */

export default Board;
