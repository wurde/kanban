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
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
`

const List = styled.div`
  width: 500px;
  padding: 15px;
  margin: 15px;
  background-color: #EFEFEF;
`

const Card = styled.div`
  padding: 10px;
  margin-bottom: 15px;
  background-color: #FFF;
  cursor: pointer;
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
            <Card className="card">Card #8</Card>
            <Card className="card">Card #7</Card>
            <Card className="card">Card #6</Card>
          </List>
          <List className="list">
            <Heading type="h6">To Do</Heading>
            <Card className="card">Card #5</Card>
          </List>
          <List className="list">
            <Heading type="h6">In Progress</Heading>
            <Card className="card">Card #4</Card>
          </List>
          <List className="list">
            <Heading type="h6">Done</Heading>
            <Card className="card">Card #3</Card>
            <Card className="card">Card #2</Card>
            <Card className="card">Card #1</Card>
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
