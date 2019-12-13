/**
 * Dependencies
 */

import React from 'react';
import { Heading } from '@wurde/components';

/**
 * Define styles
 */

const ListHeaderStyle = {
  paddingTop: '5px',
};

const HeadingStyle = {
  marginBottom: '10px'
};

/**
 * Define component
 */

function ListHeader(props) {
  return (
    <div className="list-header" style={ListHeaderStyle}>
      <Heading type="h6" style={HeadingStyle}>
        {props.title}
      </Heading>
    </div>
  );
}

/**
 * Export component
 */

export default ListHeader;
