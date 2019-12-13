/**
 * Dependencies
 */

import React from 'react';
import { Icon } from '@wurde/components';

/**
 * Define styles
 */

const style = {
  float: 'right',
  marginBottom: '-5px',
  marginRight: '5px',
};

/**
 * Define component
 */

function ListControl() {
  return <Icon type="ellipsis-h" size={20} fill="#888" style={style} />
}

/**
 * Export component
 */

export default ListControl;
