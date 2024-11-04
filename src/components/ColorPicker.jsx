import React from 'react';
import { snapshot, useSnapshot } from 'valtio';
import {SketchPicker} from "react-color";

import state from "../store"



const ColorPicker = () => {
  const snap = useSnapshot(state);
  
  
  return (
    <div className='absolute left-full ml-9'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#3498db",
          "#2ecc71",
          "#9b59b6",
          "#1abc9c",
          "#16a085",
          "#2c3e50",
          '#FFD700',
          '	#FFFF00'

          
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker