/**
 * Dependencies
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Row,
  Column,
  Button,
  Card as CardComponent,
  Icon
} from '@wurde/components';

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
  cursor: 'pointer',
};

/**
 * Define component
 */

function CardForm(props) {
  const [text, setText] = useState('');

  function closeForm() {
    props.setShowCardForm(false);
  }

  function handleTextChange(e) {
    e.preventDefault();
    setText(e.target.value);
  }

  function addCard() {
    if (text.length > 0) {
      let listData = { ...props.lists };
      listData[props.listTitle] = [...listData[props.listTitle], text];
      props.updateLists(listData);
      setText('');
    }
  }

  return (
    <div className="CardForm">
      <Row>
        <Column>
          <CardComponent className="card-form" style={CardStyle}>
            <Textarea
              autoFocus={true}
              placeholder="Enter text..."
              value={text}
              onChange={handleTextChange}
              className="card-textarea"
            ></Textarea>
          </CardComponent>
        </Column>
      </Row>

      <Row>
        <Column style={ControlsStyle}>
          <Button type="success" style={ButtonStyle} onClick={addCard}>
            Add Card
          </Button>
          <Icon
            type="close"
            fill="#888"
            style={IconStyle}
            onClick={closeForm}
            className="close-icon"
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
