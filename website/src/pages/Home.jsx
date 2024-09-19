import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'

import Loader from '../components/Loader';
import Room from '../models/Room';
import Trainer from '../models/Trainer';
import Pika from '../models/Pika';
import Computer from '../models/Computer';
import Gnome from '../models/Gnome';
import HomeInfo from '../components/HomeInfo';

const Home = () => {

  const [currentStage, setCurrentStage] = useState(1);
  const changeStage = () => {
    var i = currentStage;
    i += 1
    if (i == 8) {
      i = 1;
    }
    setCurrentStage(i);
  }
  
  const adjustRoomForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 0, 0];
    let rotation = [0, 0, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];

    } else {
      screenScale = [1, 1, 1];

    }
    
    return [screenScale, screenPosition, rotation]
    
  }

  const [roomScale, roomPosition, rotation] = adjustRoomForScreenSize();

  return (
    <section className='w-full h-screen relative' onClick={changeStage}>
    <div className='absolute top-16 left-0 right-0 z-10 flex items-center justify-center'>
      {currentStage && <HomeInfo currentStage={currentStage} />}
    </div>
      <Canvas 
        className='w-full h-screen bg-transparent'
        camera={{position:[0,2,3.5]}}
      >
        <Suspense fallback={<Loader />}>
          <CameraControls />
          <directionalLight position={[1,1,1]} intesity={5} />
          <ambientLight intensity={0.5} />
          <Room 
            position={roomPosition}
            scale={roomScale}
            rotation={rotation}
          />
          <Trainer />
          <Pika />
          <Computer />
          <Gnome />
        </Suspense>
      </Canvas> 
    </section>
  )
}

export default Home