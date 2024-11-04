import { useState, useCallback } from 'react';
import { Vector3, Raycaster, Plane } from 'three';
import { useThree } from '@react-three/fiber';

export const useDrag = (initialPosition, controlsRef) => {
  const [position, setPosition] = useState(new Vector3(...initialPosition));
  const [dragging, setDragging] = useState(false);
  const { camera, mouse } = useThree(); // Get camera and mouse from context

  const raycaster = new Raycaster();
  
  // Update this plane's normal vector as per your object's axis alignment
  const plane = new Plane(new Vector3(0, 0, 1), 0); 

  const onMouseDown = useCallback((event) => {
    setDragging(true);
    event.stopPropagation();
    if (controlsRef.current) {
      controlsRef.current.enabled = false; // Disable OrbitControls when dragging starts
    }
  }, [controlsRef]);

  const onMouseMove = useCallback((event) => {
    if (!dragging) return;

    // Convert mouse position to normalized device coordinates (-1 to +1)
    const mouseVector = {
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1,
    };

    // Set raycaster based on mouse coordinates and camera perspective
    raycaster.setFromCamera(mouseVector, camera);

    // Find the intersection point with the plane
    const intersect = new Vector3();
    raycaster.ray.intersectPlane(plane, intersect);

    if (intersect) {
      setPosition(intersect); // Update the position state
    }
  }, [dragging, camera, raycaster, plane]);

  const onMouseUp = useCallback(() => {
    setDragging(false);
    if (controlsRef.current) {
      controlsRef.current.enabled = true; // Re-enable OrbitControls when dragging ends
    }
  }, [controlsRef]);

  return {
    position,
    onMouseDown,
    onMouseMove,
    onMouseUp,
  };
};
