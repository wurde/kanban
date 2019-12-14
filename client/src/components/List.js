/**
 * Dependencies
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import ListHeader from './ListHeader';
import ListContent from './ListContent';
import ListActions from './ListActions';

/**
 * Define styles
 */

const ListWrapper = styled.div`
  display: inline-block;
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

const ListWrapperStyle = isDragOver => {
  const styles = {};
  if (isDragOver) styles['backgroundColor'] = '#d3d3d3';
  return styles;
};

/**
 * Define component
 */

function List(props) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [showCardForm, setShowCardForm] = useState(false);
  const [dragged, setDragged] = useState();

  // function dragStart(e) {
  //   setDragged(e.currentTarget);
  //   e.dataTransfer.effectAllowed = 'move';
  //   e.dataTransfer.setData('text/html', dragged);
  //   // e.target.style.opacity = 0.5;
  //   // el.style["transform"] = 'rotate(3deg)';
  //   // el.style["box-shadow"] = 'rgba(77, 99, 119, 0.47) 0px 8px 10px -4px';
  // }

  // function dragEnd(e) {
  //   e.target.style.opacity = '';
  //   dragged.style.display = 'block';
  //   dragged.parentNode.removeChild(placeholder);
  //   const data = this.state.colors;
  //   const from = Number(dragged.dataset.id);
  //   const to = Number(over.dataset.id);
  //   if (from < to) to--;
  //   data.splice(to, 0, data.splice(from, 1)[0]);
  //   this.setState({ colors: data });
  // }

  // function dragOver(e) {
  //   e.preventDefault();
  //   if (!isDragOver) setIsDragOver(true);
  //   dragged.style.display = 'none';
  //   if (e.target.className === 'placeholder') return;
  //   this.over = e.target;
  //   e.target.parentNode.insertBefore(placeholder, e.target);
  // }

  return (
    <ListWrapper
      className="List"
      style={ListWrapperStyle(isDragOver)}
    >
      <CardList className="CardList">
        <ListHeader title={props.title} />
        <ListContent
          list={props.title}
          cards={props.cards}
          showCardForm={showCardForm}
          setShowCardForm={setShowCardForm}
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
