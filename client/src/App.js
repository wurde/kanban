/**
 * Dependencies
 */

import React from 'react';
import { Row, Column } from '@wurde/components';
import { Heading } from '@wurde/components';

/**
 * Define component
 */

function App() {
  return (
    <Row>
      <Column>

        <Row>
          <Column>
            <Heading type="h6">Backlog</Heading>
            <Heading type="h6">To Do</Heading>
            <Heading type="h6">In Progress</Heading>
            <Heading type="h6">Done</Heading>
          </Column>
        </Row>

      </Column>
    </Row>
  );
}

/**
 * Export component
 */

export default App;
