import { Suspense} from "react";
import { Canvas} from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


import React from 'react'

type Canvas3dProps = {object:string}
type Object3dPorps = {object:string,position:number[],fov:number}

const Canvas3d = ({object}:Canvas3dProps) => {
  const planet =useGLTF(object)
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={2} />
      <primitive object={planet.scene} />
    </mesh>
  )
}

const Object3d = ({object,position,fov}:Object3dPorps) => {
  return (
    <Canvas 
    frameloop="demand"
    shadows
    camera={{ position: position, fov: fov }}
    gl ={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={null}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        autoRotate
        /> 
        <Canvas3d object={object}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default Object3d

