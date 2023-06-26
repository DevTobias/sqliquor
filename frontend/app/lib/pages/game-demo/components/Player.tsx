import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { FC } from 'react';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import { config } from '$lib/config';

type GLTFResult = GLTF & {
  nodes: {
    Player_reference: THREE.Mesh;
  };
  materials: {
    White: THREE.MeshStandardMaterial;
  };
};

export const Player: FC<GroupProps> = (props) => {
  const { nodes, materials } = useGLTF(config.assets.playerGLB) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Player_reference.geometry}
        material={materials.White}
        position={[0, 4, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 4]}
        scale={0.1}
      />
    </group>
  );
};

useGLTF.preload(config.assets.playerGLB);
