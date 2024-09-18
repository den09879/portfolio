import { useEffect, useRef } from 'react'


import pikaScene from '../assets/3d/pikachu.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Pika = () => {
	const pikaRef = useRef();
	const { scene, animations } = useGLTF(pikaScene);
	const { actions } = useAnimations (animations, pikaRef);

	useFrame(() => {
		if (pikaRef.current.rotation.x == 0.001) {
			pikaRef.current.rotation.y = 0.7;
			pikaRef.current.position.x = -0.7;
			pikaRef.current.position.y = 0.05;
			pikaRef.current.position.z = 0.15;
			actions['Dance'].play();
			pikaRef.current.rotation.x = 0.002;
		}
		if (pikaRef.current.rotation.x == 0.002 && pikaRef.current.position.z < 1.6) {
			pikaRef.current.position.z += 0.01;
		} 

		if (pikaRef.current.rotation.x == 0.002 && pikaRef.current.position.z > 1.6) {
			pikaRef.current.position.z = 1.6;
			pikaRef.current.rotation.x = 0.003;
		}

		if (pikaRef.current.rotation.x == 0.003) {
			actions['Dance'].stop();
			actions['Jump'].play();
			pikaRef.current.rotation.x = 0.004;
		}

		if (pikaRef.current.rotation.x == 0.004 && pikaRef.current.position.z < 2.1) {
			pikaRef.current.position.z += 0.0034;
			pikaRef.current.position.x += 0.007;
			
		}

		if (pikaRef.current.rotation.x == 0.004 && pikaRef.current.position.z > 2.1) {
			actions['Jump'].stop();
			actions['Idle'].play();
			pikaRef.current.position.x = 0.336;
			pikaRef.current.position.z = 2.1;
			pikaRef.current.rotation.y = 3;
			setTimeout(() => {
				pikaRef.current.rotation.x = 0.005;
			}, 3000);
		}
		
		if (pikaRef.current.rotation.x == 0.005 && pikaRef.current.position.x < 1.45) {
			actions['Idle'].stop();
			pikaRef.current.rotation.y = 1.5;
			actions['Jump'].play();
			pikaRef.current.position.x += 0.005;
		}

		if (pikaRef.current.rotation.x == 0.005 && pikaRef.current.position.x > 1.45) {
			pikaRef.current.position.x = 1.45;
			pikaRef.current.rotation.y = 2.25;
			actions['Jump'].stop();
			actions['Idle'].play();
			setTimeout(() => {
				pikaRef.current.rotation.y = 3;
				actions['Jump'].stop();
				actions['Dance'].play();
				pikaRef.current.rotation.x = 0.006;
			}, 4000);
			
		}
		if (pikaRef.current.rotation.x == 0.006 && pikaRef.current.position.z > 0.45) {
			pikaRef.current.position.z -= 0.011;
		}

		if (pikaRef.current.rotation.x == 0.006 && pikaRef.current.position.z < 0.45) {
			pikaRef.current.position.z = 0.45;
			actions['Dance'].stop();
			actions['Jump'].play();
			setTimeout(() => {
				pikaRef.current.rotation.y = 4.5;
				actions['Jump'].stop();
				actions['Dance'].play();
				pikaRef.current.rotation.x = 0.007;
			}, 3000);
						
		
		}

		if (pikaRef.current.rotation.x == 0.007 && pikaRef.current.position.x > -2.307) {
			
			pikaRef.current.position.x -= 0.013;	
		}

		if (pikaRef.current.rotation.x == 0.007 && pikaRef.current.position.x < -2.307) {
			pikaRef.current.rotation.y = 3.75;
			pikaRef.current.position.x = -2.307;	
			pikaRef.current.rotation.x = 0.008;
		}

		if (pikaRef.current.rotation.x == 0.008 && pikaRef.current.position.x > -4) {

			pikaRef.current.position.x -= 0.0095;
			pikaRef.current.position.z -= 0.0075;
		}

		if (pikaRef.current.rotation.x == 0.008 && pikaRef.current.position.x < -4) {
			pikaRef.current.position.x = -4;
			actions['Dance'].stop();
			actions['Jump'].play();
			pikaRef.current.rotation.x = 0.009;
		}

		if (pikaRef.current.rotation.x == 0.009 && pikaRef.current.position.x > -4.3) {
			pikaRef.current.position.y += 0.0035;
			pikaRef.current.position.x -= 0.0028;
			pikaRef.current.position.z -= 0.0028;
		}

		if (pikaRef.current.rotation.x == 0.009 && pikaRef.current.position.x < -4.3) {
			pikaRef.current.rotation.y = 3;
			pikaRef.current.position.x = -4.3;
			actions['Jump'].stop();
			actions['Idle'].play();
			setTimeout(() => {
				pikaRef.current.rotation.y = 0.75;
				actions['Idle'].stop();
				actions['Jump'].play();
				pikaRef.current.rotation.x = 0.01;
			}, 3000);
		}

		if (pikaRef.current.rotation.x == 0.01 && pikaRef.current.position.x < -3.5) {
			pikaRef.current.position.y -= 0.0013;
			pikaRef.current.position.x += 0.0028;
			pikaRef.current.position.z += 0.0025;
		} 

		if (pikaRef.current.rotation.x == 0.01 && pikaRef.current.position.x > -3.5) {
			pikaRef.current.position.x = -3.5;
			pikaRef.current.position.y = 0.05;
			actions['Jump'].stop();
			actions['Dance'].play();
			pikaRef.current.rotation.x = 0.011;
		}
		if (pikaRef.current.rotation.x == 0.011 && pikaRef.current.position.x < -0.7) {
			pikaRef.current.position.x += 0.02;
			pikaRef.current.position.z += 0.006;
		}

		if (pikaRef.current.rotation.x == 0.011 && pikaRef.current.position.x > -0.7) {
			pikaRef.current.rotation.y = 0.7;
			pikaRef.current.position.x = -0.7;
			pikaRef.current.position.y = 0.05;
			pikaRef.current.position.z = 0.15;
			pikaRef.current.rotation.x = 0.001;
		}

	})
	
	
  return (
    <mesh position={[-0.7,0.05,0.15]} scale={[0.5,0.5,0.5]} rotation={[0.001,0.7,0]}ref={pikaRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Pika