/**
 * Dependencies
 */

import React from 'react';
import {
  Card as CardComponent,
  Text
} from '@wurde/components';

/**
 * Define styles
 */

const CardStyle = {
  padding: '10px',
  marginBottom: '15px',
  backgroundColor: '#FFF3CD',
  borderRadius: 0,
  zIndex: 0,
  cursor: 'pointer',
  draggable: true,
  whiteSpace: 'normal',
};

/**
 * Define component
 */

function Card(props) {
  return (
    <CardComponent
      shadow={1}
      style={CardStyle}
      className="card"
      onClick={props.toggleModal}
    >
      <Text>{props.card}</Text>
    </CardComponent>
  );
}

/**
 * Export component
 */

export default Card;
