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

function ListActions() {
  return (
    <div className="list-actions" style={MainStyle}>
      <Button type="secondary" style={ButtonStyle}>
        <Icon type="plus" size={15} style={IconStyle} />
        Add a card
      </Button>
    </div>
  );
}

/**
 * Export component
 */

export default ListActions;
