/**
 * Dependencies
 */

import styled from 'styled-components';

/**
 * Define component
 */

const DragOverMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  z-index: ${props => {
    if (props.isDragging === false) return 0;

    if (props.isDragging === props.listIndex) {
      return 0;
    } else {
      return 10;
    }
  }};
`;

/**
 * Export component
 */

export default DragOverMask;
