import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { FC } from 'react';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import { config } from '$lib/config';

type GLTFResult = GLTF & {
  nodes: {
    Mesh_Buildings_House_01005: THREE.Mesh;
    Mesh_Buildings_House_01005_1: THREE.Mesh;
    Mesh_Buildings_House_01005_2: THREE.Mesh;
    Mesh_Buildings_House_01005_3: THREE.Mesh;
  };
  materials: {
    ['door.002']: THREE.MeshStandardMaterial;
    ['M_LowPolyMegapolis_Light.002']: THREE.MeshStandardMaterial;
    ['M_LowPolyMegapolis_Glass.002']: THREE.MeshStandardMaterial;
    ['M_LowPolyMegapolis_MAIN.007']: THREE.MeshStandardMaterial;
  };
};

export const DemoScene: FC<GroupProps> = (props) => {
  const { nodes, materials } = useGLTF(config.assets.demoLevelGlB) as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group position={[-61.13, 0, -158.997]} rotation={[0, 1.571, 0]} scale={5.657}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh_Buildings_House_01005.geometry} material={materials['door.002']} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_Buildings_House_01005_1.geometry}
          material={materials['M_LowPolyMegapolis_Light.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_Buildings_House_01005_2.geometry}
          material={materials['M_LowPolyMegapolis_Glass.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_Buildings_House_01005_3.geometry}
          material={materials['M_LowPolyMegapolis_MAIN.007']}
        />
      </group>
    </group>
  );
};

useGLTF.preload(config.assets.demoLevelGlB);
