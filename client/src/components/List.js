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
  const [dragged, setDraggedElement] = useState();

  function dragStart(e) {
    e.currentTarget.style.opacity = 0.5;
    setDraggedElement(e.currentTarget);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', dragged);
    props.setIsDragging(props.index);
    props.setMoveData({
      ...props.moveData,
      from: props.index,
      text: e.currentTarget.textContent
    });
  }

  function dragEnd(e) {
    e.preventDefault();
    dragged.style.opacity = 1;
    props.setIsDragging(false);
    setDraggedElement(null);
    setIsPlaceholerVisible(false);
  }

  function dragEnter(e) {
    e.preventDefault();
    if (props.isDragging !== props.index) {
      setIsPlaceholerVisible(true);
      props.setMoveData({ ...props.moveData, to: props.index })
    }
  }

  function dragLeave(e) {
    e.preventDefault();
    if (props.isDragging !== props.index) setIsPlaceholerVisible(false);
  }

  function dragOver(e) {
    // React fails to fire onDrop events without this code.
    e.preventDefault();
  }

  function drop(e) {
    e.preventDefault();
    if (props.isDragging !== props.index && isPlaceholerVisible) {
      const data = props.moveData;

      const listTitles = Object.keys(props.lists);
      let listData = {...props.lists};
      listData[listTitles[data.from]] = listData[listTitles[data.from]].filter(card => card !== data.text);
      listData[listTitles[data.to]] = [data.text].concat(listData[listTitles[data.to]]);
      setIsPlaceholerVisible(false);
      props.setMoveData({ ...props.moveData, to: null, text: null });
      props.updateLists(listData);
      props.setIsDragging(false);
    }
  }

  return (
    <ListWrapper className={`List List-${props.index}`}>
      <DragOverMask
        listIndex={props.index}
        isDragging={props.isDragging}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDragOver={dragOver}
        onDrop={drop}
      />

      <CardList className="CardList">
        <ListHeader title={props.title} />
        <ListContent
          listIndex={props.index}
          listTitle={props.title}
          cards={props.cards}
          lists={props.lists}
          updateLists={props.updateLists}
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
