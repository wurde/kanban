/**
 * Dependencies
 */

import styled from 'styled-components';

/**
 * Define component
 */

const Placeholder = styled.div`
  padding: 30px;
  margin-bottom: 15px;
  border-radius: 0;
  z-index: 0;
  whitespace: normal;
  border: 3px solid #000;
  border-style: dotted;
  ${props => {
    console.log('isVisible', props.isVisible);
    return (props.isVisible ? 'display: block' : 'display: none')
  }}
`;
// ${props => (props.isVisible ? 'display: block' : 'display: none')}

/**
 * Export component
 */

export default Placeholder;
