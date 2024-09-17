import {useRef} from 'react'

import trainerScene from '../assets/3d/trainer_red_-_pokemon_3d_sprite.glb';
import { useGLTF } from '@react-three/drei';

const Trainer = () => {
  const trainerRef = useRef();
  const { scene } = useGLTF(trainerScene);

  return (
    <mesh position={[1.5,0,0.05]} scale={[0.65,0.65,0.65]} ref={trainerRef}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Trainer