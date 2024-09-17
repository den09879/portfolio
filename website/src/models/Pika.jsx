import { useEffect, useRef } from 'react'


import pikaScene from '../assets/3d/pikachu.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useTimer } from 'use-timer';



const Pika = () => {
	const pikaRef = useRef();
	var step = 0;
	const { scene, animations } = useGLTF(pikaScene);
	const { actions } = useAnimations (animations, pikaRef);

	useFrame(() => {
		if (step == 0) {
			actions['Dance'].play();
			step = 1;
		}
		if (step == 1 && pikaRef.current.position.z < 1.6) {
			pikaRef.current.position.z += 0.01;
		} 

		if (step == 1 && pikaRef.current.position.z > 1.6) {
			pikaRef.current.position.z = 1.6;
			step = 2;
		}

		if (step == 2) {
			actions['Dance'].stop();
			actions['Jump'].play();
			step = 3;
		}

		if (step == 3 && pikaRef.current.position.z < 2.1) {
			pikaRef.current.position.z += 0.0034;
			pikaRef.current.position.x += 0.007;
			
		}

		if (step == 3 && pikaRef.current.position.z > 2.1) {
			actions['Jump'].stop();
			actions['Idle'].play();
			pikaRef.current.position.x = 0.336;
			pikaRef.current.position.z = 2.1;
			pikaRef.current.rotation.y = 3;
			setTimeout(() => {
				step = 4;
			}, 3000);
		}
		
		if (step == 4 && pikaRef.current.position.x < 1.45) {
			actions['Idle'].stop();
			pikaRef.current.rotation.y = 1.5;
			actions['Jump'].play();
			pikaRef.current.position.x += 0.005;
		}

		if (step == 4 && pikaRef.current.position.x > 1.45) {
			pikaRef.current.position.x = 1.45;
			pikaRef.current.rotation.y = 2.25;
			actions['Jump'].stop();
			actions['Idle'].play();
			setTimeout(() => {
				pikaRef.current.rotation.y = 3;
				actions['Jump'].stop();
				actions['Dance'].play();
				step = 5;
			}, 4000);
			
		}
		if (step == 5 && pikaRef.current.position.z > 0.45) {
			pikaRef.current.position.z -= 0.011;
		}

		if (step == 5 && pikaRef.current.position.z < 0.45) {
			pikaRef.current.position.z = 0.45;
			actions['Dance'].stop();
			actions['Jump'].play();
			setTimeout(() => {
				pikaRef.current.rotation.y = 4.5;
				actions['Jump'].stop();
				actions['Dance'].play();
				step = 6;
			}, 3000);
						
		
		}

		if (step == 6 && pikaRef.current.position.x > -2.307) {
			
			pikaRef.current.position.x -= 0.013;	
		}

		if (step == 6 && pikaRef.current.position.x < -2.307) {
			pikaRef.current.rotation.y = 3.75;
			pikaRef.current.position.x = -2.307;	
			step = 7;
		}

		if (step == 7 && pikaRef.current.position.x > -4) {

			pikaRef.current.position.x -= 0.0095;
			pikaRef.current.position.z -= 0.0075;
		}

		if (step == 7 && pikaRef.current.position.x < -4) {
			pikaRef.current.position.x = -4;
			actions['Dance'].stop();
			actions['Jump'].play();
			step = 8;
		}

		if (step == 8 && pikaRef.current.position.x > -4.3) {
			pikaRef.current.position.y += 0.0035;
			pikaRef.current.position.x -= 0.0028;
			pikaRef.current.position.z -= 0.0028;
		}

		if (step == 8 && pikaRef.current.position.x < -4.3) {
			pikaRef.current.rotation.y = 3;
			pikaRef.current.position.x = -4.3;
			actions['Jump'].stop();
			actions['Idle'].play();
			setTimeout(() => {
				pikaRef.current.rotation.y = 0.75;
				actions['Idle'].stop();
				actions['Jump'].play();
				step = 9;
			}, 3000);
		}

		if (step == 9 && pikaRef.current.position.x < -3.5) {
			pikaRef.current.position.y -= 0.0013;
			pikaRef.current.position.x += 0.0028;
			pikaRef.current.position.z += 0.0025;
		} 

		if (step == 9 && pikaRef.current.position.x > -3.5) {
			pikaRef.current.position.x = -3.5;
			pikaRef.current.position.y = 0.05;
			actions['Jump'].stop();
			actions['Dance'].play();
			step = 10;
		}
		if (step == 10 && pikaRef.current.position.x < -0.7) {
			pikaRef.current.position.x += 0.02;
			pikaRef.current.position.z += 0.006;
		}

		if (step == 10 && pikaRef.current.position.x > -0.7) {
			pikaRef.current.rotation.y = 0.7;
			pikaRef.current.position.x = -0.7;
			pikaRef.current.position.y = 0.05;
			pikaRef.current.position.z = 0.15;
			step = 0;
		}
		/*
		

		} 
		if (status === "RUNNING" && time == 16) {
			console.log(pikaRef.current.position.x); // x = -3.875, z=-1.062, y=0.4
			console.log(pikaRef.current.position.z);
			console.log(pikaRef.current.position.y);
			actions['Jump'].stop();
			actions['Idle'].play();
			pikaRef.current.rotation.y = 3;
		} 
		if (status === "RUNNING" && time == 17) {
			actions['Idle'].stop();
			actions['Dance'].play();
			pikaRef.current.position.y -= 0.0024;
			pikaRef.current.position.x += 0.02;
			pikaRef.current.position.z += 0.008;
		} 
		
		if (status === "RUNNING" && time == 18) {
			pikaRef.current.rotation.y = 0;
			pikaRef.current.position.x = -0.7;
			pikaRef.current.position.y = 0.05;
			pikaRef.current.position.z = 0.15;
			
		} 
		if (status === "RUNNING" && time >= 20) {
			pause();
			reset();
			
		} */
	})
	
	
  return (
    <mesh position={[-0.7,0.05,0.15]} scale={[0.5,0.5,0.5]} rotation={[0,0.7,0]}ref={pikaRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Pika