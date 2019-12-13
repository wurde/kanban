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
  width: 450px;
  max-width: 450px;
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

  return (
    <ListWrapper className="List">
      <CardList>
        <ListHeader title={props.title} />
        <ListContent
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
