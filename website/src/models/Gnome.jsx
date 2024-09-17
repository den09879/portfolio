import { useRef,  useEffect, useState } from 'react'

import gnomeScene from '../assets/3d/the_green_wizard_gnome_n64_style.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const actType = ['Wizard_Gnome_Armature|Walking', 'Wizard_Gnome_Armature|Fall', 'Wizard_Gnome_Armature|Hit', 'Wizard_Gnome_Armature|Curse'];
const Gnome = () => {
	const gnomeRef = useRef();
    const [ act, setAct ] = useState('Wizard_Gnome_Armature|Walking');
	const { scene, animations } = useGLTF(gnomeScene);
	const { actions } = useAnimations (animations, gnomeRef);
    useFrame(() => {
        if (gnomeRef.current.position.z < 2.5 && gnomeRef.current.rotation.y == 0) {
            gnomeRef.current.position.z += 0.01;
        } else if (gnomeRef.current.position.z > 2.5 && gnomeRef.current.rotation.y < 1.5) {
            actions[actType[1]].play();
            actions[actType[2]].play();
            gnomeRef.current.rotation.y += 1.5;
        } 
        
        if (gnomeRef.current.rotation.y == 1.5 && gnomeRef.current.position.x < 4.3) {
            gnomeRef.current.position.x += 0.01;
        } else if (gnomeRef.current.rotation.y == 1.5 && gnomeRef.current.position.x > 4.3) {
            actions[actType[3]].play();
            gnomeRef.current.rotation.y += 1.5;
            gnomeRef.current.position.z -= 0.01;
        }
        
        if (gnomeRef.current.rotation.y == 3 && gnomeRef.current.position.z > -1.9) {
            gnomeRef.current.position.z -= 0.01;
        } else if (gnomeRef.current.position.z < -1.9 && gnomeRef.current.rotation.y == 3 ) {
            actions[actType[0]].play();
            gnomeRef.current.rotation.y += 1.5;
        }

        if (gnomeRef.current.rotation.y == 4.5 && gnomeRef.current.position.x > 2.5) {
            gnomeRef.current.position.x -= 0.01;
            gnomeRef.current.position.y -= 0.002;
        } else if (gnomeRef.current.rotation.y == 4.5 && gnomeRef.current.position.x < 2.5) {
            gnomeRef.current.position.x = 3;
            gnomeRef.current.position.y = 5;
            gnomeRef.current.position.z = 0;
            gnomeRef.current.rotation.y += 1.5;
        } 

        if (gnomeRef.current.rotation.y > 4.5 && gnomeRef.current.position.y > 0) {
            gnomeRef.current.rotation.y += 1.5;
            gnomeRef.current.position.y -= 0.01;
        } else if (gnomeRef.current.rotation.y > 4.5 && gnomeRef.current.position.y < 0) {
            gnomeRef.current.position.x = 3;
            gnomeRef.current.position.y = 0;
            gnomeRef.current.position.z = 0;
            gnomeRef.current.rotation.x = 0;
            gnomeRef.current.rotation.y = 0;
            gnomeRef.current.rotation.z = 0;
        }
       

    })
	useEffect(() => {
		actions[act].play();
	}, []);
	
  return (
    <mesh position={[3,0,0]} ref={gnomeRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Gnome