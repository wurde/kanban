/**
 * Dependencies
 */

import React from 'react';
import { Button, Icon } from '@wurde/components';

/**
 * Define styles
 */

const MainStyle = {
  padding: '5px 0',
};

const ButtonStyle = {
  display: 'flex',
  alignItems: 'center',
};

const IconStyle = {
  marginBottom: '-5px',
  marginRight: '5px',
};

/**
 * Define component
 */

function ListActions(props) {
  return (
    <div className="ListActions" style={MainStyle}>
      {props.showCardForm ? null :
        <Button
          type="secondary"
          style={ButtonStyle}
          onClick={() => props.setShowCardForm(true)}
        >
          <Icon type="plus" size={15} style={IconStyle} />
          Add a card
        </Button>
      }
    </div>
  );
}

/**
 * Export component
 */

export default ListActions;
