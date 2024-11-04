import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Excavator from "./Excavator";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  const excavatorRef = useRef();
 
 

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >

      <ambientLight intensity={0.4} />
      <Environment preset="city" />
      <directionalLight position={[30, 9, 10]} intensity={1.5} color="#ffffff" />
      <CameraRig>
        <Center>
          <Excavator/>
        </Center>
        {/* <axesHelper /> */}
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
