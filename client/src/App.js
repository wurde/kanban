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
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  overflow-x: auto;
  overflow-y: hidden;
  padding: 15px;
  margin-bottom: 5px;
  white-space: nowrap;
  user-select: none;
`

const ListWrapper = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 450px;
  height: 100%;
  margin: 0 15px;
  background-color: #efefef;
  white-space: nowrap;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 100%;
  padding: 0 15px;
`

const ListHeader = styled.div`
`

const ListContent = styled.div`
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: 4px;
  margin-right: 4px;
`

const ListActions = styled.div`
`

const Card = styled.div`
  padding: 10px;
  margin-bottom: 15px;
  background-color: #FFF;
  cursor: pointer;
  box-shadow: 0 3px 5px #999;
`

/**
 * Define component
 */

function App() {
  return (
    <Row>
      <Column>
        <Board id="board">
          <ListWrapper className="list-wrapper">
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
                <Card className="card">Card #3</Card>
                <Card className="card">Card #2</Card>
                <Card className="card">Card #1</Card>
              </ListContent>

              <ListActions className="list-actions">
                <Button type="secondary">Add a card</Button>
              </ListActions>
            </List>
          </ListWrapper>

          <ListWrapper className="list-wrapper">
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
          </ListWrapper>

          <ListWrapper className="list-wrapper">
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
          </ListWrapper>

          <ListWrapper className="list-wrapper">
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
          </ListWrapper>
        </Board>
      </Column>
    </Row>
  );
}

/**
 * Export component
 */

export default App;
