import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { FC } from 'react';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import { config } from '$lib/config';

type GLTFResult = GLTF & {
  nodes: {
    Level: THREE.Mesh;
  };
  materials: {
    White: THREE.MeshStandardMaterial;
  };
};

export const MainBuilding: FC<GroupProps> = (props) => {
  const { nodes, materials } = useGLTF(config.assets.mainBuildingGLB) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Level.geometry}
        material={materials.White}
        position={[0, 3, -17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.25, 3, 16.75]}
      />
    </group>
  );
};

useGLTF.preload(config.assets.mainBuildingGLB);
