import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { FC } from 'react';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import { config } from '$lib/config';

type GLTFResult = GLTF & {
  nodes: {
    Mesh: THREE.Mesh;
    Mesh_1: THREE.Mesh;
    Mesh_2: THREE.Mesh;
  };
  materials: {
    Computer_Offwhite: THREE.MeshStandardMaterial;
    Screen_Black: THREE.MeshStandardMaterial;
    Keys_Grey: THREE.MeshStandardMaterial;
  };
};

export const Computer: FC<GroupProps> = (props) => {
  const { nodes, materials } = useGLTF(config.assets.computerGLB) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh.geometry} material={materials.Computer_Offwhite} />
      <mesh geometry={nodes.Mesh_1.geometry} material={materials.Screen_Black} />
      <mesh geometry={nodes.Mesh_2.geometry} material={materials.Keys_Grey} />
    </group>
  );
};

useGLTF.preload(config.assets.computerGLB);
