/**
 * Dependencies
 */

import React from 'react';
import {
  Card as CardComponent,
  Paragraph
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
};

const CardTitleStyle = {
  overflow: 'hidden',
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
      <Paragraph style={CardTitleStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. And infinite.
      </Paragraph>
    </CardComponent>
  );
}

/**
 * Export component
 */

export default Card;
