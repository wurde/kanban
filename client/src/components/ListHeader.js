/**
 * Dependencies
 */

import React from 'react';
import { Heading } from '@wurde/components';
import ListControl from './ListControl';

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
        {props.title} <ListControl />
      </Heading>
    </div>
  );
}

/**
 * Export component
 */

export default ListHeader;
