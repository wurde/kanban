/**
 * Dependencies
 */

import React from "react";
import { Icon } from "@wurde/components";
import data from "../data/default.json";

/**
 * Define styles
 */

const style = {
  position: 'absolute',
  cursor: 'pointer',
  zIndex: 10,
};

/**
 * Define component
 */

function ClearBoardBtn(props) {
  function clearBoard() {
    const yes = window.confirm('Are you sure? This removes all cards.');
    if (yes) props.updateLists(data);
  }

  return (
    <Icon
      type="refresh"
      size={18}
      fill="#888"
      onClick={clearBoard}
      style={style}
      id="clear-board"
    />
  )
};

/**
 * Export component
 */

export default ClearBoardBtn;
