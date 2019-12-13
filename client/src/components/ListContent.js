/**
 * Dependencies
 */

import React from 'react';
import Card from './Card';
import CardForm from './CardForm';

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
    <div className="ListContent" style={ListContentStyle}>
      {props.cards.map((card, i) => (
        <Card key={i} card={card} />
      ))}
      {props.showCardForm ? (
        <CardForm setShowCardForm={props.setShowCardForm} />
      ) : null}
    </div>
  );
}

/**
 * Export component
 */

export default ListContent;
