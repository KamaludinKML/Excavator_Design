// components/AxisCompass.jsx
import React from 'react';

const AxisCompass = () => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      style={{
        position: 'absolute',
        top: '20px',
        left: '30px',
        zIndex: 1000, // Pastikan berada di atas elemen lain
      }}
    >
      {/* Definisi marker panah */}
      <defs>
        <marker
          id="arrow"
          markerWidth="10"
          markerHeight="10"
          refX="5"
          refY="5"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
        </marker>
      </defs>

      {/* Sumbu X - Merah */}
      <line
        x1="10"
        y1="90"
        x2="80"
        y2="90"
        stroke="red"
        strokeWidth="1.2"
        markerEnd="url(#arrow)"
      />
      <text x="90" y="95" fill="red" fontSize="15">X</text>

      {/* Sumbu Y - Hijau */}
      <line
        x1="10"
        y1="90"
        x2="10"
        y2="25"
        stroke="green"
        strokeWidth="1.2"
        markerEnd="url(#arrow)"
      />
      <text x="7.2" y="12" fill="green" fontSize="15">Y</text>

      {/* Sumbu Z - Biru (Diagonal) */}
      <line
        x1="10"
        y1="90"
        x2="60"
        y2="50"
        stroke="blue"
        strokeWidth="1.2"
        strokeDasharray="3,5"
        markerEnd="url(#arrow)"
      />
      <text x="69" y="45" fill="blue" fontSize="15">Z</text>
    </svg>
  );
};

export default AxisCompass;
