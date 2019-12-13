/**
 * Dependencies
 */

import React, { useState, useEffect } from 'react';
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
    setLists([
      {
        title: 'Backlog',
        cards: [
          {
            title:
              'Fusce eu dui tortor. Mauris vel venenatis felis. Praesent sit amet justo est. Cras id suscipit lacus, et laoreet eros.'
          },
          {
            title:
              'Nulla libero urna, mollis rutrum purus vitae, posuere placerat magna.'
          },
          {
            title:
              'Aliquam tristique non nunc nec pellentesque. Cras porttitor pretium libero id fermentum.'
          },
          {
            title:
              'Aliquam tristique non nunc nec pellentesque. Cras porttitor pretium libero id fermentum.'
          },
          {
            title:
              'Aliquam tristique non nunc nec pellentesque. Cras porttitor pretium libero id fermentum.'
          },
          {
            title:
              'Aliquam tristique non nunc nec pellentesque. Cras porttitor pretium libero id fermentum.'
          },
          {
            title:
              'Aliquam tristique non nunc nec pellentesque. Cras porttitor pretium libero id fermentum.'
          },
          {
            title:
              'Aliquam tristique non nunc nec pellentesque. Cras porttitor pretium libero id fermentum.'
          },
          {
            title:
              'Aliquam tristique non nunc nec pellentesque. Cras porttitor pretium libero id fermentum.'
          },
          {
            title:
              'Aliquam tristique non nunc nec pellentesque. Cras porttitor pretium libero id fermentum.'
          },
          {
            title:
              'Aliquam tristique non nunc nec pellentesque. Cras porttitor pretium libero id fermentum.'
          },
          {
            title:
              'Aliquam tristique non nunc nec pellentesque. Cras porttitor pretium libero id fermentum.'
          },
          {
            title:
              'Aliquam tristique non nunc nec pellentesque. Cras porttitor pretium libero id fermentum.'
          },
          {
            title:
              'Aliquam tristique non nunc nec pellentesque. Cras porttitor pretium libero id fermentum.'
          }
        ]
      },
      {
        title: 'To Do',
        cards: [{ title: 'Proin ac nibh pulvinar ipsum.' }]
      },
      {
        title: 'In Progress',
        cards: [{ title: 'Mollis rutrum purus vitae.' }]
      },
      {
        title: 'Done',
        cards: [
          {
            title:
              'Nulla libero urna, mollis rutrum purus vitae, posuere placerat magna.'
          },
          {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          },
          {
            title:
              'Aliquam tristique non nunc nec pellentesque. Cras porttitor pretium libero id fermentum.'
          }
        ]
      }
    ]);
  }, [])

  return (
    <Board className="board" style={BoardStyle}>
      {/* {dataExample.lists.map((list, i) => 
        <List key={i} title={list.title} cards={list.cards} />
      )} */}
    </Board>
  );
};

/**
 * Export component
 */

export default Board;
