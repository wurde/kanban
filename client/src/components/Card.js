/**
 * Dependencies
 */

import React, { useState } from 'react';
import {
  Card as CardComponent,
  Text
} from '@wurde/components';

/**
 * Define styles
 */

const CardStyle = isHover => {
  const style = {
    padding: '10px',
    marginBottom: '15px',
    backgroundColor: '#FFF3CD',
    borderRadius: 0,
    zIndex: 0,
    cursor: 'pointer',
    draggable: true,
    whiteSpace: 'normal',
  };

  if (isHover) {
    style.boxShadow = 'rgba(77, 99, 119, 0.47) 0px 8px 10px -4px';
  }

  return style;
};

/**
 * Define component
 */

function Card(props) {
  const [text, setText] = useState(props.card);
  const [isHover, setIsHover] = useState(false);

  function mouseEnter(e) {
    e.preventDefault();
    setIsHover(true);
  }

  function mouseLeave(e) {
    e.preventDefault();
    setIsHover(false);
  }

  return (
    <CardComponent
      shadow={1}
      style={CardStyle(isHover)}
      className="Card"
      draggable={true}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onDragStart={props.dragStart}
      onDragEnd={props.dragEnd}
      onClick={props.toggleModal}
    >
      <Text>{text}</Text>
    </CardComponent>
  );
}

/**
 * Export component
 */

export default Card;
