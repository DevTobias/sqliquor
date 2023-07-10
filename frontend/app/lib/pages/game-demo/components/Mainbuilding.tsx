import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { FC } from 'react';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import { config } from '$lib/config';

type GLTFResult = GLTF & {
  nodes: {
    Outsidewall_back: THREE.Mesh;
    Outsidewall_front: THREE.Mesh;
    StorageRack_2_mesh001: THREE.Mesh;
  };
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial;
    ['Storage_Metal.003']: THREE.MeshStandardMaterial;
  };
};

export const MainBuilding: FC<GroupProps> = (props) => {
  const { nodes, materials } = useGLTF(config.assets.mainBuildingGLB) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Outsidewall_back.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 3, -17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.25, 3, 16.75]}
      />
      <mesh
        geometry={nodes.Outsidewall_front.geometry}
        material={nodes.Outsidewall_front.material}
        position={[-0.25, 1, 16.75]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.25, 1, 16.75]}
      />
      <mesh
        geometry={nodes.StorageRack_2_mesh001.geometry}
        material={materials['Storage_Metal.003']}
        position={[-13.768, 0, -15.609]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={2.5}
      />
    </group>
  );
};

useGLTF.preload(config.assets.mainBuildingGLB);
