import { useEffect, useRef } from 'react'

import compScene from '../assets/3d/smol_ame_in_an_upcycled_terrarium_hololiveen.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Computer = () => {
	const compRef = useRef();
	const { scene, animations } = useGLTF(compScene);
	const { actions } = useAnimations (animations, compRef);
    
	useEffect(() => {
		actions['Animation'].play();
		
	}, []);
	
  return (
    <mesh position={[-4.4,0.75,-2.4]} scale={[0.25,0.25,0.25]} ref={compRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Computer