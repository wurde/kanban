/**
 * Dependencies
 */

import React from 'react';
import { Icon } from '@wurde/components';
import LocalStorage from '../helpers/LocalStorage';

/**
 * Define styles
 */

const style = {
  position: 'absolute',
  cursor: 'pointer',
  zIndex: 10,
};

/**
 * Define component
 */

function ClearBoardBtn() {
  function clearBoard() {
    const yes = window.confirm('Are you sure? This removes all cards.');
    if (yes) LocalStorage.clearAllCards();
    window.location.reload(true);
  }

  return (
    <Icon 
      type="refresh"
      size={18}
      fill="#888"
      onClick={clearBoard}
      style={style}
    />
  )
};

/**
 * Export component
 */

export default ClearBoardBtn;
