/**
 * Dependencies
 */

import React from 'react';
import Card from './Card';
import CardForm from './CardForm';
import Placeholder from './Placeholder';

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
      <Placeholder isVisible={props.isPlaceholerVisible} />

      {props.cards.map((card, i) => (
        <Card
          key={i}
          card={card}
          dragStart={props.dragStart}
          dragEnd={props.dragEnd}
        />
      ))}

      {props.showCardForm ? (
        <CardForm
          listTitle={props.listTitle}
          lists={props.lists}
          updateLists={props.updateLists}
          setShowCardForm={props.setShowCardForm}
        />
      ) : null}
    </div>
  );
}

/**
 * Export component
 */

export default ListContent;
