import { useRef,  useEffect } from 'react'

import earthScene from '../assets/3d/a_windy_day.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Earth = () => {
	const earthRef = useRef();
	const { scene, animations } = useGLTF(earthScene);
	const { actions } = useAnimations (animations, earthRef);
    useFrame(() => {
        actions['Object_0'].play();
    })
	
  return (
    <mesh position={[3,0,0]} ref={earthRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Earth