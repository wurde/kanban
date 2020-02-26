/**
 * Dependencies
 */

import React, { useState } from 'react';
import List from './List';

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
  padding: '25px 15px 15px 15px',
  marginBottom: '5px',
  whiteSpace: 'nowrap',
  userSelect: 'none'
};

/**
 * Define component
 */

function Board(props) {
  const [isDragging, setIsDragging] = useState(false);
  const [moveData, setMoveData] = useState({});

  return (
    <div className="Board" style={BoardStyle}>
      {Object.keys(props.lists).map((list, i) => (
        <List
          key={i}
          index={i}
          title={list}
          cards={props.lists[list]}
          lists={props.lists}
          updateLists={props.updateLists}
          isDragging={isDragging}
          setIsDragging={setIsDragging}
          moveData={moveData}
          setMoveData={setMoveData}
        />
      ))}
    </div>
  );
};

/**
 * Export component
 */

export default Board;
