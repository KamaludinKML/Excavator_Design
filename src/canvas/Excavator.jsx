import React, { useState, useRef } from 'react';
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import { easing } from 'maath';
import state from '../store';

const Excavator = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/komatsuexcavator3.glb');
  const [selectedMesh, setSelectedMesh] = useState(null);

  const logoTexture = useTexture(snap.logoDecal);
  const additionalLogotexture = useTexture(snap.additionalLogoDecal)
  const Logotexture3 = useTexture(snap.LogoDecal3)
  const Logotexture4 = useTexture(snap.LogoDecal4)
  const Logotexture5 = useTexture(snap.LogoDecal5)
  const Logotexture6 = useTexture(snap.LogoDecal6)

  const { raycaster } = useThree();

  const handleDecalClick = (id) => {
    state.selectedDecalId = id;
  };


  const handlePointerDown = (event) => {
    event.stopPropagation();
    const intersects = raycaster.intersectObject(event.object, true);
    if (intersects.length > 0) {
      setSelectedMesh(intersects[0].object);
      if (event.object === selectedMesh) {
        setIsMovingLogo(true);
      }
    }
  };

  useFrame((delta) => {
    if (selectedMesh) {
      easing.dampC(selectedMesh.material.color, snap.color, 0.25, delta);
    }
  });
  const stateString = JSON.stringify(snap);

  return (
    <group 
      key={stateString}
    >
      <group position={[1, -0.4, 0.003]} rotation={[-Math.PI / 2, 0, 2.53]} scale={0.801}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.0195}>
        <group position={[0, 37.908, 198.993]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['arm_01_-_Default_0'].geometry}
              material={materials['01_-_Default_0.001']}
              position={[2.09, 2.809, -2.582]}
              onPointerDown={handlePointerDown}
            >
                {snap.isAdditionalLogoTexture && (
          <Decal
            position={snap.additionalLogoPosition}    
            rotation={snap.additionalLogoRotation}
            scale={snap.additionalLogoScale}
            map={additionalLogotexture}
            depthTest={true}
            depthWrite={false}
            onPointerDown={(e) => {
              e.stopPropagation(); handleDecalClick('additionalLogoTexture');}}
            
          />
        )}
        </mesh>
          </group>
          <group position={[0, 37.908, 198.993]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['arm_link_Material_#1336_0'].geometry}
              material={materials['Material_1336.001']}
              position={[2.09, 0, -2.582]}
              onPointerDown={handlePointerDown}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['arm_link_Material_#1337_0'].geometry}
              material={materials['Material_1337.001']}
              position={[2.09, 0, -2.582]}
              onPointerDown={handlePointerDown}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['arm_link_Material_#1345_0'].geometry}
              material={materials['Material_1345.001']}
              position={[2.09, 0, -2.582]}
              onPointerDown={handlePointerDown}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['arm_link_Material_#1347_0'].geometry}
              material={materials['Material_1347.001']}
              position={[2.09, 0, -2.582]}
              onPointerDown={handlePointerDown}
            />
          </group>
          <group position={[0, 37.908, 198.993]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['boom_cylinder_03_-_Default_0'].geometry}
              material={materials['03_-_Default.001']}
              position={[2.09, 0, -2.582]}
              onPointerDown={handlePointerDown}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['boom_cylinder_Material_#1291_0'].geometry}
              material={materials['Material_1291.001']}
              position={[2.09, 0, -2.582]}
              onPointerDown={handlePointerDown}
            />
          </group>
          <group position={[0, 37.908, 198.993]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['bucket_Material_#1345_0'].geometry}
              material={materials.bucket}
              position={[2.09, 0, -2.582]}
              onPointerDown={handlePointerDown}
            />
          </group>
          <group position={[0, 37.908, 198.993]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['bucket_cylinder_02_-_Default_0'].geometry}
              material={materials['03_-_Default.001']}
              position={[2.09, 0, -2.582]}
              onPointerDown={handlePointerDown}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['bucket_cylinder_Material_#1280_0'].geometry}
              material={materials['Material_1291.001']}
              position={[2.09, 0, -2.582]}
              onPointerDown={handlePointerDown}
            />
          </group>
          <group position={[0, 37.908, 198.993]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['bucket_link_Material_#1337_0'].geometry}
              material={materials['Material_1337.001']}
              position={[2.09, 0, -2.582]}
              onPointerDown={handlePointerDown}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['bucket_link_Material_#1345_0'].geometry}
              material={materials.katrol}
              position={[2.09, 0, -2.582]}
              onPointerDown={handlePointerDown}
            />
          </group>
          <group position={[0, 37.908, 198.993]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['cab_Material_#1269_0'].geometry}
              material={materials['Material_1269.001']}
              position={[-0.102, -0.804, 40.004]}
              onPointerDown={handlePointerDown}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['cab_Material_#1271_0'].geometry}
              material={materials['Material_1271.001']}
              position={[5.424, -39.073, 0]}
              onPointerDown={handlePointerDown}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['cab_Material_#1272_0'].geometry}
              material={materials['cabin uap']}
              position={[5.424, -23.186, -19.095]}
              onPointerDown={handlePointerDown}
            />
            <group
              position={[-87.738, 35.026, 129.59]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[423.686, 423.687, 423.687]}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Kubus012.geometry}
                material={materials['01_-_Default.002']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Kubus012_1.geometry}
                material={materials['Material_1270.001']}
                onPointerDown={handlePointerDown}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Kubus012_2.geometry}
                material={materials['03_-_Default.001']}
                onPointerDown={handlePointerDown}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cabin_material004.geometry}
              material={materials['Material_1270.001']}
              position={[-87.738, 35.026, 129.59]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[423.686, 423.687, 423.687]}
              onPointerDown={handlePointerDown}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cabin_material005.geometry}
              material={materials['03_-_Default.001']}
              position={[-87.738, 35.026, 129.59]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[423.686, 423.687, 423.687]}
              onPointerDown={handlePointerDown}
            >
                 {snap.isLogoTexture6 && (
          <Decal
            position={snap.LogoPosition6}    
            rotation={snap.LogoRotation6}
            scale={snap.LogoScale6}
            map={Logotexture6}  
            depthTest={true}
            depthWrite={false}
            onPointerDown={(e) => {
              e.stopPropagation(); handleDecalClick('LogoTexture6');}}
          />
        )}
        </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Kubus001.geometry}
              material={materials['Material_1270.001']}
              position={[9.107, 133.441, -37.908]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[423.686, 423.687, 423.687]}
              onPointerDown={handlePointerDown}
            />
          </group>
          <group
            position={[6.225, 47.06, 510.402]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.95, 1, 1]}>
            <group
              position={[-23.558, 197.846, 91.528]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[445.986, 440.634, 423.687]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Silinder021.geometry}
                material={materials['01_-_Default.002']}
                onPointerDown={handlePointerDown}
              >
                   {snap.isLogoTexture && (
          <Decal
            position={snap.logoPosition}    
            rotation={snap.logoRotation}
            scale={snap.logoScale}
            map={logoTexture}
            depthTest={true}
            depthWrite={false}
            onPointerDown={(e) => {
              e.stopPropagation(); handleDecalClick('logoTexture');}}
            
          />
        )}
          {snap.isLogoTexture4 && (
          <Decal
            position={snap.LogoPosition4}    
            rotation={snap.LogoRotation4}
            scale={snap.LogoScale4}
            map={Logotexture4}
            depthTest={true}
            depthWrite={false}
            onPointerDown={(e) => {
              e.stopPropagation(); handleDecalClick('LogoTexture4');}}
          />
        )}
          {snap.isLogoTexture5 && (
          <Decal
            position={snap.LogoPosition5}    
            rotation={snap.LogoRotation5}
            scale={snap.LogoScale5}
            map={Logotexture5}
            depthTest={true}
            depthWrite={false}
            onPointerDown={(e) => {
              e.stopPropagation(); handleDecalClick('LogoTexture5');}}
          />
        )}
        </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Silinder021_1.geometry}
                material={materials['Material_1347.001']}
                onPointerDown={handlePointerDown}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.camber003.geometry}
              material={materials['01_-_Default.002']}
              position={[88.2, 366.989, 87.676]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[445.986, 423.687, 423.687]}
              onPointerDown={handlePointerDown}
            >
               {snap.isLogoTexture3 && (
          <Decal
            position={snap.LogoPosition3}    
            rotation={snap.LogoRotation3}
            scale={snap.LogoScale3}
            map={Logotexture3}
            depthTest={true}
            depthWrite={false}
            onPointerDown={(e) => {
              e.stopPropagation(); handleDecalClick('LogoTexture3');}}
          />
        )}
        </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.camber004.geometry}
              material={nodes.camber004.material}
              position={[88.2, 366.902, 47.365]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[445.986, 423.687, 423.687]}
              onPointerDown={handlePointerDown}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.katrol.geometry}
              material={materials.rotate}
              position={[7.845, 355.837, 47.214]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[445.986, 423.687, 423.687]}
              onPointerDown={handlePointerDown}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.katrol001.geometry}
              material={materials.rotate}
              position={[7.845, 355.837, 47.214]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[445.986, 423.687, 423.687]}
              onPointerDown={handlePointerDown}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.katrol002.geometry}
              material={materials.rotate}
              position={[5.646, 355.837, 49.795]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[445.986, 423.687, 423.687]}
              onPointerDown={handlePointerDown}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pegangan.geometry}
              material={materials['Material_1347.001']}
              position={[46.882, 300.38, 138.07]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[445.986, 423.687, 423.687]}
              onPointerDown={handlePointerDown}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.penghempit.geometry}
              material={materials['01_-_Default.001']}
              position={[18.431, 350.049, 101.151]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[445.986, 423.687, 423.687]}
              onPointerDown={handlePointerDown}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pijakan_kaki.geometry}
              material={materials['01_-_Default.002']}
              position={[-5.818, 290.975, 50.536]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[445.986, 423.687, 423.687]}
              onPointerDown={handlePointerDown}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.uap001.geometry}
              material={materials['cabin uap']}
              position={[12.779, 174.642, 156.71]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[210.038, 212.247, 199.537]}
              onPointerDown={handlePointerDown}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Object02_Material_#1280_0'].geometry}
            material={materials['Material_1280.001']}
            position={[115.803, 33.924, 365.392]}
            rotation={[-Math.PI / 2, 0, 0]}
            onPointerDown={handlePointerDown}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Object04_Material_#1280_0'].geometry}
            material={materials['Material_1280.001']}
            position={[115.803, 33.924, 32.499]}
            rotation={[-Math.PI / 2, 0, 0]}
            onPointerDown={handlePointerDown}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['roller_chamber_Material_#1280_0'].geometry}
            material={materials['Material_1280.001']}
            position={[0, 37.143, 198.833]}
            rotation={[-Math.PI / 2, 0, 0]}
            onPointerDown={handlePointerDown}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['trake_shoe_assembly_02_-_Default_0'].geometry}
            material={materials['02_-_Default.001']}
            position={[0, 37.908, 198.993]}
            rotation={[-Math.PI / 2, 0, 0]}
            onPointerDown={handlePointerDown}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['trake_shoe_assembly001_02_-_Default_0'].geometry}
            material={materials['02_-_Default.001']}
            position={[0, 37.908, 198.993]}
            rotation={[-Math.PI / 2, 0, 0]}
            onPointerDown={handlePointerDown}
          />
        </group>
      </group>
    </group>
  )
}

export default Excavator;
