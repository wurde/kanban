/**
 * Dependencies
 */

import React from 'react';
import styled from 'styled-components';
import { Row, Column } from '@wurde/components';
import { Heading } from '@wurde/components';

/**
 * Define styles
 */

const Board = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
`

const List = styled.div`
  width: 500px;
  padding: 15px;
  margin: 15px;
  background-color: #EFEFEF;
`

/**
 * Define component
 */

function App() {
  return (
    <Row>
      <Column>

        <Board id="board">
          <List className="list">
            <Heading type="h6">Backlog</Heading>
          </List>
          <List className="list">
            <Heading type="h6">To Do</Heading>
          </List>
          <List className="list">
            <Heading type="h6">In Progress</Heading>
          </List>
          <List className="list">
            <Heading type="h6">Done</Heading>
          </List>
        </Board>

      </Column>
    </Row>
  );
}

/**
 * Export component
 */

export default App;
