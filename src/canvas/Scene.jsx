import { Canvas, useThree } from '@react-three/fiber'
import { useGLTF, useTexture, Center, Decal, Text3D, OrbitControls } from '@react-three/drei'

function Scene({ margin = 0.5 }) {
  const { width, height } = useThree((state) => state.viewport)
  return (
    <>
      <Center rotation={[0, 0.3, 0]} position={[8,6,-10]}>
        <Text3D
          curveSegments={32}
          bevelEnabled
          bevelSize={0.05}
          bevelThickness={0.12}
          height={0.2}
          lineHeight={0.6}
          letterSpacing={-0.04}
          size={1}
          font="/Inter_Bold.json">
          {`United\nTractors`}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  )
}
export default Scene;

