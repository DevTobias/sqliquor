import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { FC } from 'react';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import { config } from '$lib/config';

type GLTFResult = GLTF & {
  nodes: {
    Counter: THREE.Mesh;
  };
  materials: {
    White: THREE.MeshStandardMaterial;
  };
};

export const Counter: FC<GroupProps> = (props) => {
  const { nodes, materials } = useGLTF(config.assets.counterGLB) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Counter.geometry} material={materials.White} position={[-3.297, 0, 2.56]} />
    </group>
  );
};

useGLTF.preload(config.assets.counterGLB);
