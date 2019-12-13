/**
 * Dependencies
 */

import React, { useState } from 'react';
import { Row, Column } from '@wurde/components';
import { Board, CardModal } from './components';

/**
 * Define component
 */

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <Row className="App">
      <Column>
        <Board toggleModal={toggleModal} />
        <CardModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
      </Column>
    </Row>
  );
}

/**
 * Export component
 */

export default App;
