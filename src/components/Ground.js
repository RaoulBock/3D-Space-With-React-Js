import React from "react";
import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures";
import { RepeatWrapping, NearestFilter } from "three";

export default function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 3, 0, 0],
    position: [0, 0, 0]
  }));

  groundTexture.magFilter = NearestFilter;
  groundTexture.wrapS = RepeatWrapping;
  groundTexture.wrapT = RepeatWrapping;
  groundTexture.repeat.set(100, 100);

  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
}
