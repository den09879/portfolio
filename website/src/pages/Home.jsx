import React, { Suspense, useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { CameraControls } from '@react-three/drei'

import Loader from '../components/Loader'

import Room from '../models/Room';
import Trainer from '../models/Trainer';
import Pika from '../models/Pika';
import Computer from '../models/Computer';
import Gnome from '../models/Gnome';
import Earth from '../models/Earth';

const Home = () => {
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
    <section className='w-full h-screen relative'>
      <Canvas 
        className='w-full h-screen bg-transparent'
        camera={{position:[0,0.75,2]}}
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
{/*<div className='abosulte top28 left-0 right-0 z-10 flex items-center justify-center'>
    POPUP
  </div>*/}
export default Home