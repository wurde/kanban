/**
 * Dependencies
 */

import React from 'react';
import { Row, Column } from '@wurde/components';
import { Modal, Heading, Paragraph, Divider, Button } from '@wurde/components';

/**
 * Define component
 */

function CardModal(props) {
  return (
    <Modal isOpen={props.isModalOpen} toggleModal={props.toggleModal}>
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
            aliquet, ligula a commodo bibendum, ipsum augue varius lectus, sit
            amet pellentesque mauris eros nec arcu. Morbi id placerat ante, at
            gravida orci. Proin ac nibh pulvinar ipsum porta scelerisque. Donec
            bibendum, mi nec fringilla fringilla, dolor metus scelerisque elit,
            quis placerat erat tortor lacinia dui.
          </Paragraph>
        </Column>

        <Column>
          <Divider />
        </Column>

        <Column spacing={4}>
          <Button
            type="success"
            onClick={props.toggleModal}
            style={{ marginRight: '15px' }}
          >
            Confirm
          </Button>
          <Button type="secondary" onClick={props.toggleModal}>
            Cancel
          </Button>
        </Column>
      </Row>
    </Modal>
  );
}

/**
 * Export component
 */

export default CardModal;
