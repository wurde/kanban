/**
 * Dependencies
 */

import React from 'react';
import styled from 'styled-components';
import {
  Row,
  Column,
  Button,
  Card as CardComponent,
  Icon,
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

const ControlsStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '3px',
};

const ButtonStyle = {
  marginRight: '10px',
};

const IconStyle = {
  marginBottom: '-5px',
  cursor: 'pointer'
};

/**
 * Define component
 */

function CardForm(props) {
  function closeForm() {
    props.setShowCardForm(false);
  }

  return (
    <div className="card-form">
      <Row>
        <Column>
          <CardComponent className="card-form" style={CardStyle}>
            <Textarea autoFocus={true} placeholder="Enter text..."></Textarea>
          </CardComponent>
        </Column>
      </Row>

      <Row>
        <Column style={ControlsStyle}>
          <Button type="success" style={ButtonStyle}>
            Add Card
          </Button>
          <Icon
            type="close"
            fill="#888"
            style={IconStyle}
            onClick={closeForm}
          />
        </Column>
      </Row>
    </div>
  );
}

/**
 * Export component
 */

export default CardForm;
