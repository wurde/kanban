/**
 * Dependencies
 */

import React from 'react';
import styled from 'styled-components';
import {
  Card as CardComponent,
  Text
} from '@wurde/components';
import Card from './Card';

/**
 * Define styles
 */

const CardStyle = {
  minHeight: '60px',
  padding: '10px',
  marginBottom: '15px',
  backgroundColor: '#FFF3CD',
  borderRadius: 0,
  zIndex: 0,
  whiteSpace: 'normal',
};

const Textarea = styled.textarea`
  width: 100%;
  height: 20vh;
  background: none;
  border: none;
  box-shadow: none;
  outline: none;
`;

/**
 * Define component
 */

function CardForm(props) {
  return (
    <CardComponent className="card-form" style={CardStyle}>
      <Textarea autoFocus={true}></Textarea>
    </CardComponent>
  );
}

/**
 * Export component
 */

export default CardForm;
