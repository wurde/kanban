/**
 * Dependencies
 */

import React from 'react';
import Card from './Card';

/**
 * Define styles
 */

const ListContentStyle = {
  maxHeight: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
  paddingRight: '4px',
  marginRight: '4px',
};

/**
 * Define component
 */

function ListContent(props) {
  return (
    <div className="list-content" style={ListContentStyle}>
      {props.cards.map(card => <Card card={card} />)}
    </div>
  );
}

/**
 * Export component
 */

export default ListContent;
