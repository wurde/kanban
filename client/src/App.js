/**
 * Dependencies
 */

import React from 'react';
import styled from 'styled-components';
import { Row, Column } from '@wurde/components';
import { Heading, Button } from '@wurde/components';

/**
 * Define styles
 */

const Board = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
`

const List = styled.div`
  width: 450px;
  height: 100%;
  padding: 15px;
  margin: 15px;
  background-color: #EFEFEF;
`
const ListHeader = styled.div`
`

const ListContent = styled.div`
`

const ListActions = styled.div`
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
            <ListHeader className="list-header">
              <Heading type="h6" style={{ marginBottom: '10px' }}>
                Backlog
              </Heading>
            </ListHeader>

            <ListContent className="list-content">
              <Card className="card">Card #8</Card>
              <Card className="card">Card #7</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
              <Card className="card">Card #6</Card>
            </ListContent>

            <ListActions className="list-actions">
              <Button type="secondary">Add a card</Button>
            </ListActions>
          </List>
          <List className="list">
            <ListHeader className="list-header">
              <Heading type="h6" style={{ marginBottom: '10px' }}>
                To Do
              </Heading>
            </ListHeader>

            <ListContent className="list-content">
              <Card className="card">Card #5</Card>
            </ListContent>

            <ListActions className="list-actions">
              <Button type="secondary">Add a card</Button>
            </ListActions>
          </List>
          <List className="list">
            <ListHeader className="list-header">
              <Heading type="h6" style={{ marginBottom: '10px' }}>
                In Progress
              </Heading>
            </ListHeader>

            <ListContent className="list-content">
              <Card className="card">Card #4</Card>
            </ListContent>

            <ListActions className="list-actions">
              <Button type="secondary">Add a card</Button>
            </ListActions>
          </List>
          <List className="list">
            <ListHeader className="list-header">
              <Heading type="h6" style={{ marginBottom: '10px' }}>
                Done
              </Heading>
            </ListHeader>

            <ListContent className="list-content">
              <Card className="card">Card #3</Card>
              <Card className="card">Card #2</Card>
              <Card className="card">Card #1</Card>
            </ListContent>

            <ListActions className="list-actions">
              <Button type="secondary">Add a card</Button>
            </ListActions>
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
