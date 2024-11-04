import React from 'react';

const LogoControls = ({
  logoRotation,
  handleRotationChange,
  logoScale,
  handleScaleChange,
  logoPosition,
  handlePositionChange,
  closeControls,
  selectedDecalId
}) => {
   // Fungsi untuk mendapatkan label berdasarkan selectedDecalId
   const getDecalLabel = () => {
    switch (selectedDecalId) {
      case 'logoTexture':
        return 'Logo belakang';
      case 'additionalLogoTexture':
        return 'Logo Tambahan 1';
      // case 'additionalLogoTexture1':
      //   return 'Logo Tambahan 2';
      case 'LogoTexture3':
        return 'Logo 3';
      case 'LogoTexture4':
        return 'Logo 4';
      case 'LogoTexture5':
        return 'Logo 5';
      case 'LogoTexture6':
        return 'Logo 6';
      default:
        return 'Decal';
    }
  };
  return (
    <div className="absolute left-full ml-9 bg-white radius p-4 shadow-lg rounded">
       <h3>Kontrol {getDecalLabel()}</h3>
      <div className="space-y-3">
        {/* Rotation Controls */}
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Rot X:</label>
          <input
            step={0.1}
            type="number"
            className="w-20 p-1 text-sm border-gray-300 rounded"
            value={logoRotation[0]}
            onChange={(e) => handleRotationChange(0, e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Rot Y:</label>
          <input
            step={0.1}
            type="number"
            className="w-20 p-1 text-sm border-gray-300 rounded"
            value={logoRotation[1]}
            onChange={(e) => handleRotationChange(1, e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Rot Z:</label>
          <input
            step={0.1}
            type="number"
            className="w-20 p-1 text-sm border-gray-300 rounded"
            value={logoRotation[2]}
            onChange={(e) => handleRotationChange(2, e.target.value)}
          />
        </div>

        {/* Scale Control */}
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Scale:</label>
          <input
            step={0.1}
            type="number"
            className="w-20 p-1 text-sm border-gray-300 rounded"
            value={logoScale}
            onChange={(e) => handleScaleChange(e.target.value)}
          />
        </div>

        {/* Position Controls */}
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Pos X:</label>
          <input
            step={0.01}
            type="number"
            className="w-20 p-1 text-sm border-gray-300 rounded"
            value={logoPosition[0]}
            onChange={(e) => handlePositionChange(0, e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Pos Y:</label>
          <input
            step={0.01}
            type="number"
            className="w-20 p-1 text-sm border-gray-300 rounded"
            value={logoPosition[1]}
            onChange={(e) => handlePositionChange(1, e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Pos Z:</label>
          <input
            step={0.01}
            type="number"
            className="w-20 p-1 text-sm border-gray-300 rounded"
            value={logoPosition[2]}
            onChange={(e) => handlePositionChange(2, e.target.value)}
          />
        </div>
      </div>
      <button
        className="mt-5 w-full px-7 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        onClick={closeControls}
      >
        Keluar
      </button>
    </div>
  );
};

export default LogoControls;
