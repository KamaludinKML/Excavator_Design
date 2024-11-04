import React from 'react'
import { useSnapshot } from 'valtio'

import state from '../store';

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick, onDragStart, onDragOver, onDrop }) => {
  const snap = useSnapshot(state);

  const activeStyles = isFilterTab && isActiveTab
    ? { backgroundColor: snap.color, opacity: 0.5 }
    : { backgroundColor: "transparent", opacity: 1 };

  return (
    <div
      key={tab.name}
      className={`tab-btn ${isFilterTab ? 'rounded-full glassmorhism' : 'rounded-4'}`}
      onClick={handleClick}
      style={activeStyles}
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <img
        src={tab.icon}
        alt={`${tab.name} icon`}
      />
    </div>
  )
}

export default Tab;
