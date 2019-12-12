/**
 * Dependencies
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Column } from '@wurde/components';
import { Heading, Button, Icon } from '@wurde/components';
import { Modal, Card, Paragraph, Divider } from '@wurde/components';

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
  background-color: #f1f1f4;
  white-space: nowrap;
  border-radius: 5px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 100%;
  padding: 0 15px;
`

const ListHeader = styled.div`
  padding-top: 5px;
`

const ListContent = styled.div`
  max-height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: 4px;
  margin-right: 4px;
`

const ListActions = styled.div`
  padding: 5px 0;
`

const CardStyle = {
  padding: '10px',
  marginBottom: '15px',
  backgroundColor: '#FFF3CD',
  borderRadius: 0,
  zIndex: 0,
  cursor: 'pointer'
};

/**
 * Define component
 */

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

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
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #8
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #7
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #6
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #3
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #2
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #1
                </Card>
              </ListContent>

              <ListActions className="list-actions">
                <Button
                  type="secondary"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <Icon
                    type="plus"
                    size={15}
                    style={{ marginBottom: '-5px', marginRight: '5px' }}
                  />
                  Add a card
                </Button>
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
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #5
                </Card>
              </ListContent>

              <ListActions className="list-actions">
                <Button
                  type="secondary"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <Icon
                    type="plus"
                    size={15}
                    style={{ marginBottom: '-5px', marginRight: '5px' }}
                  />
                  Add a card
                </Button>
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
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #4
                </Card>
              </ListContent>

              <ListActions className="list-actions">
                <Button
                  type="secondary"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <Icon
                    type="plus"
                    size={15}
                    style={{ marginBottom: '-5px', marginRight: '5px' }}
                  />
                  Add a card
                </Button>
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
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #3
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #2
                </Card>
                <Card shadow={1} style={CardStyle} className="card" onClick={toggleModal}>
                  Card #1
                </Card>
              </ListContent>

              <ListActions className="list-actions">
                <Button
                  type="secondary"
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  <Icon
                    type="plus"
                    size={15}
                    style={{ marginBottom: '-5px', marginRight: '5px' }}
                  />
                  Add a card
                </Button>
              </ListActions>
            </List>
          </ListWrapper>
        </Board>

        <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
          <Row>
            <Column spacing={2}>
              <Heading type="h3">Title</Heading>
            </Column>

            <Column>
              <Divider />
            </Column>

            <Column spacing={2}>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                aliquet, ligula a commodo bibendum, ipsum augue varius lectus,
                sit amet pellentesque mauris eros nec arcu. Morbi id placerat
                ante, at gravida orci. Proin ac nibh pulvinar ipsum porta
                scelerisque. Donec bibendum, mi nec fringilla fringilla, dolor
                metus scelerisque elit, quis placerat erat tortor lacinia dui.
              </Paragraph>
            </Column>

            <Column>
              <Divider />
            </Column>

            <Column spacing={4}>
              <Button
                type="success"
                onClick={toggleModal}
                style={{ marginRight: '15px' }}
              >
                Confirm
              </Button>
              <Button type="secondary" onClick={toggleModal}>
                Cancel
              </Button>
            </Column>
          </Row>
        </Modal>
      </Column>
    </Row>
  );
}

/**
 * Export component
 */

export default App;
