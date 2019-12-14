/**
 * Dependencies
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import ListHeader from './ListHeader';
import ListContent from './ListContent';
import ListActions from './ListActions';
import DragOverMask from './DragOverMask';

/**
 * Define styles
 */

const ListWrapper = styled.div`
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 350px;
  max-width: 350px;
  height: 100%;
  margin: 0 15px;
  background-color: #f1f1f4;
  white-space: nowrap;
  border-radius: 5px;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 100%;
  padding: 0 15px;
`;

/**
 * Define component
 */

function List(props) {
  const [showCardForm, setShowCardForm] = useState(false);
  const [isPlaceholerVisible, setIsPlaceholerVisible] = useState(false);
  const [dragged, setDragged] = useState();

  function dragStart(e) {
    console.log('dragStart');
    setDragged(e.currentTarget);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', dragged);
  }

  function dragEnd(e) {
    console.log('dragEnd');
    setDragged(null);
    setIsPlaceholerVisible(false);
  }

  function dragOver(e) {
    e.preventDefault();
    console.log('dragOver');
    setIsPlaceholerVisible(true);
  }

  function dragLeave(e) {
    e.preventDefault();
    console.log('dragLeave');
    setIsPlaceholerVisible(false);
  }

  return (
    <ListWrapper className="List">
      <DragOverMask onDragOver={dragOver} onDragLeave={dragLeave} />

      <CardList className="CardList">
        <ListHeader title={props.title} />
        <ListContent
          list={props.title}
          cards={props.cards}
          showCardForm={showCardForm}
          setShowCardForm={setShowCardForm}
          isPlaceholerVisible={isPlaceholerVisible}
          dragStart={dragStart}
          dragEnd={dragEnd}
        />
        <ListActions
          showCardForm={showCardForm}
          setShowCardForm={setShowCardForm}
        />
      </CardList>
    </ListWrapper>
  );
}

/**
 * Export component
 */

export default List;
