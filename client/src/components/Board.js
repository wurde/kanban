/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
import List from './List';
import data from '../data/default.json';

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
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const prevLists = JSON.parse(localStorage.getItem('lists')) || data;
    setLists(prevLists);
  }, [])

  return (
    <div className="Board" style={BoardStyle}>
      {lists.map((list, i) => 
        <List key={i} title={list.title} cards={list.cards} />
      )}
    </div>
  );
};

/**
 * Export component
 */

export default Board;
