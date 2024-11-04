import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import state from '../store';

const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);
  const [mouseDown, setMouseDown] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [rotationVelocity, setRotationVelocity] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1); // Zoom level
  const rotationSpeed = 0.003; // Adjust this value to control the rotation speed
  const dampingFactor = 0.95; // Adjust this value to control how quickly the rotation slows down

  // Handle mouse move event for rotation
  const handleMouseMove = (event) => {
    if (mouseDown) {
      const dx = event.clientX - lastMousePosition.x;
      const dy = event.clientY - lastMousePosition.y;

      setRotationVelocity({
        x: -dy * rotationSpeed,
        y: -dx * rotationSpeed,
      });

      setRotation((prevRotation) => ({
        x: prevRotation.x - dy * rotationSpeed,
        y: prevRotation.y - dx * rotationSpeed,
      }));

      setLastMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  // Handle mouse down event
  const handleMouseDown = (event) => {
    setMouseDown(true);
    setLastMousePosition({ x: event.clientX, y: event.clientY });
  };

  // Handle mouse up event
  const handleMouseUp = () => {
    setMouseDown(false);
  };

  // Handle mouse wheel event for zooming
  const handleWheel = (event) => {
    setZoom((prevZoom) => Math.max(0.01, prevZoom - event.deltaY * 0.001)); // Adjust zoom sensitivity
  };

  // Add event listeners for mouse movements, button states, and wheel
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [mouseDown, lastMousePosition]);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // Set the initial position of the model 
    let targetPosition = [-4, 0, 20 * zoom];
    if (snap.intro) {
      if (isBreakpoint) targetPosition = [-2, 3.6, 30 * zoom];
      if (isMobile) targetPosition = [-0.7, 0.5, 35 * zoom];
    } else {
      if (isMobile) targetPosition = [-0.7, 0.5, 40 * zoom];
      else targetPosition = [0, 0, 25 * zoom];
    }

    // Adjusting damp value to make movements smoother
    easing.damp3(state.camera.position, targetPosition, 0.15, delta);

    // Apply rotation inertia if mouse is not pressed
    if (!mouseDown) {
      setRotation((prevRotation) => ({
        x: prevRotation.x + rotationVelocity.x,
        y: prevRotation.y + rotationVelocity.y,
      }));

      // Gradually reduce rotation velocity
      setRotationVelocity((prevVelocity) => ({
        x: prevVelocity.x * dampingFactor,
        y: prevVelocity.y * dampingFactor,
      }));
    }

    // Smoothly interpolate the rotation
    easing.dampE(group.current.rotation, [rotation.x, rotation.y,0], 0.15, delta);
  });

  return (
    <group ref={group} scale={1.2} position={[0, 0, -1]} >
      {children}
    </group>
  );
};

export default CameraRig;
