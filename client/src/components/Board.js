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
    const prev = JSON.parse(localStorage.getItem('lists')) || data;
    localStorage.setItem('lists', JSON.stringify(prev));
    setLists(prev);
  }, [])

  return (
    <div className="Board" style={BoardStyle}>
      {Object.keys(lists).map((list, i) => 
        <List key={i} title={list} cards={lists[list]} />
      )}
    </div>
  );
};

/**
 * Export component
 */

export default Board;
