import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

type Canvas3dProps = { object: string, hemLightIntensity: number };
type Object3dPorps = {
  object: string;
  position: number[];
  fov: number;
  horMinRotate: number;
  horMaxRotate: number;
  verMinRotate: number;
  verMaxRotate: number;
  hemLightIntensity: number;
};

const Canvas3d = ({ object, hemLightIntensity }: Canvas3dProps) => {
  const planet = useGLTF(object);
  return (
    <mesh>
      <hemisphereLight intensity={hemLightIntensity} groundColor="black" />
      <spotLight
        intensity={0.8}
        position={[10, 15, 10]}
        penumbra={1}
        castShadow
      />
      <pointLight intensity={0.5} />
      <primitive object={planet.scene} />
    </mesh>
  );
};

const Object3d = ({
  object,
  position,
  fov,
  horMinRotate,
  horMaxRotate,
  verMinRotate,
  verMaxRotate,
  hemLightIntensity
}: Object3dPorps) => {
  return (
    <Canvas
      frameloop="demand"
      shadows={{ enabled: true, type: "PCFSoftShadowMap" }}
      camera={{ position: position, fov: fov }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={horMinRotate}
          maxPolarAngle={horMaxRotate}
          minAzimuthAngle={verMinRotate}
          maxAzimuthAngle={verMaxRotate}
        />
        <Canvas3d object={object} hemLightIntensity={hemLightIntensity}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Object3d;
