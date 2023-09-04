import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { FC } from 'react';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import { config } from '$lib/config';

type GLTFResult = GLTF & {
  nodes: {
    Mesh_wineWhite001: THREE.Mesh;
    Mesh_wineWhite001_1: THREE.Mesh;
    Mesh_wineWhite001_2: THREE.Mesh;
    Mesh_wineWhite005: THREE.Mesh;
    Mesh_wineWhite005_1: THREE.Mesh;
    Mesh_wineWhite005_2: THREE.Mesh;
    Mesh_wineWhite006: THREE.Mesh;
    Mesh_wineWhite006_1: THREE.Mesh;
    Mesh_wineWhite006_2: THREE.Mesh;
    Mesh_sundae002: THREE.Mesh;
    Mesh_sundae002_1: THREE.Mesh;
    Mesh_sundae002_2: THREE.Mesh;
    Mesh_soda002: THREE.Mesh;
    Mesh_soda002_1: THREE.Mesh;
    Human_CylinderMesh009: THREE.Mesh;
    Human_CylinderMesh009_1: THREE.Mesh;
    Human_CylinderMesh009_2: THREE.Mesh;
    Human_CylinderMesh009_3: THREE.Mesh;
    Human_CylinderMesh011: THREE.Mesh;
    Human_CylinderMesh011_1: THREE.Mesh;
    Human_CylinderMesh011_2: THREE.Mesh;
    Human_CylinderMesh011_3: THREE.Mesh;
    Human_CylinderMesh011_4: THREE.Mesh;
    Human_CylinderMesh012: THREE.Mesh;
    Human_CylinderMesh012_1: THREE.Mesh;
    Human_CylinderMesh012_2: THREE.Mesh;
    Human_CylinderMesh012_3: THREE.Mesh;
    Human_CylinderMesh012_4: THREE.Mesh;
    Human_CylinderMesh013: THREE.Mesh;
    Human_CylinderMesh013_1: THREE.Mesh;
    Human_CylinderMesh013_2: THREE.Mesh;
    Human_CylinderMesh013_3: THREE.Mesh;
    Human_CylinderMesh016: THREE.Mesh;
    Human_CylinderMesh016_1: THREE.Mesh;
    Human_CylinderMesh016_2: THREE.Mesh;
    Human_CylinderMesh016_3: THREE.Mesh;
    Human_CylinderMesh016_4: THREE.Mesh;
    Human_CylinderMesh020: THREE.Mesh;
    Human_CylinderMesh020_1: THREE.Mesh;
    Human_CylinderMesh020_2: THREE.Mesh;
    Human_CylinderMesh020_3: THREE.Mesh;
    Human_CylinderMesh020_4: THREE.Mesh;
    Human_CylinderMesh022: THREE.Mesh;
    Human_CylinderMesh022_1: THREE.Mesh;
    Human_CylinderMesh022_2: THREE.Mesh;
    Human_CylinderMesh022_3: THREE.Mesh;
    Human_CylinderMesh022_4: THREE.Mesh;
    Human_CylinderMesh023: THREE.Mesh;
    Human_CylinderMesh023_1: THREE.Mesh;
    Human_CylinderMesh023_2: THREE.Mesh;
    Human_CylinderMesh023_3: THREE.Mesh;
    Human_CylinderMesh023_4: THREE.Mesh;
    Cylinder010: THREE.Mesh;
    Cylinder010_1: THREE.Mesh;
    Cylinder010_2: THREE.Mesh;
    Cylinder010_3: THREE.Mesh;
    Cylinder010_4: THREE.Mesh;
    Cylinder010_5: THREE.Mesh;
    Cylinder011: THREE.Mesh;
    Cylinder011_1: THREE.Mesh;
    Cylinder011_2: THREE.Mesh;
    Cylinder011_3: THREE.Mesh;
    Cylinder011_4: THREE.Mesh;
    Cylinder011_5: THREE.Mesh;
    Cylinder013: THREE.Mesh;
    Cylinder013_1: THREE.Mesh;
    Cylinder013_2: THREE.Mesh;
    Cylinder013_3: THREE.Mesh;
    Cylinder013_4: THREE.Mesh;
    Cylinder014: THREE.Mesh;
    Cylinder014_1: THREE.Mesh;
    Cylinder014_2: THREE.Mesh;
    Cylinder014_3: THREE.Mesh;
    Cylinder014_4: THREE.Mesh;
    Mesh_cocktail003: THREE.Mesh;
    Mesh_cocktail003_1: THREE.Mesh;
    Mesh_cocktail003_2: THREE.Mesh;
    Mesh_cocktail003_3: THREE.Mesh;
    Mesh_cocktail003_4: THREE.Mesh;
    Mesh_cocktail003_5: THREE.Mesh;
    Mesh_cocktail004: THREE.Mesh;
    Mesh_cocktail004_1: THREE.Mesh;
    Mesh_cocktail004_2: THREE.Mesh;
    Mesh_cocktail004_3: THREE.Mesh;
    Mesh_cocktail004_4: THREE.Mesh;
    Mesh_cocktail004_5: THREE.Mesh;
  };
  materials: {
    ['brownLight.030']: THREE.MeshStandardMaterial;
    ['green.025']: THREE.MeshStandardMaterial;
    ['brown.029']: THREE.MeshStandardMaterial;
    ['_defaultMat.010']: THREE.MeshStandardMaterial;
    ['purpleLight.001']: THREE.MeshStandardMaterial;
    ['brownDark.018']: THREE.MeshStandardMaterial;
    ['purple.003']: THREE.MeshStandardMaterial;
    ['_defaultMat.011']: THREE.MeshStandardMaterial;
    ['Skin.002']: THREE.MeshStandardMaterial;
    ['Shirt_Orange.001']: THREE.MeshStandardMaterial;
    ['Pants.002']: THREE.MeshStandardMaterial;
    ['Shoes.002']: THREE.MeshStandardMaterial;
    ['Shirt_Yellow.001']: THREE.MeshStandardMaterial;
    ['Hair_Grey.001']: THREE.MeshStandardMaterial;
    ['Hair_Black.001']: THREE.MeshStandardMaterial;
    ['Shirt_LightGreen.001']: THREE.MeshStandardMaterial;
    ['Shirt_LightGrey.001']: THREE.MeshStandardMaterial;
    ['Shirt_LightBlue.001']: THREE.MeshStandardMaterial;
    ['Hair_Blonde.001']: THREE.MeshStandardMaterial;
    ['Shirt_Red.002']: THREE.MeshStandardMaterial;
    ['Shirt_White.001']: THREE.MeshStandardMaterial;
    ['Hair_Brown.001']: THREE.MeshStandardMaterial;
    ['HairTie.002']: THREE.MeshStandardMaterial;
    ['Hair_Blue.001']: THREE.MeshStandardMaterial;
    ['Shirt_Black.001']: THREE.MeshStandardMaterial;
    ['Hair_Red.001']: THREE.MeshStandardMaterial;
    ['Shirt_Purple.001']: THREE.MeshStandardMaterial;
    ['Shirt_Grey.001']: THREE.MeshStandardMaterial;
    ['_defaultMat.012']: THREE.MeshStandardMaterial;
    ['greyLight.005']: THREE.MeshStandardMaterial;
    ['red.024']: THREE.MeshStandardMaterial;
    ['brownLight.031']: THREE.MeshStandardMaterial;
    ['yellow.006']: THREE.MeshStandardMaterial;
    ['green.026']: THREE.MeshStandardMaterial;
  };
};

export const SampleCharacters: FC<GroupProps> = (props) => {
  const { nodes, materials } = useGLTF(config.assets.sampleCharactersGLB) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group position={[15.503, 2.375, -5.303]} scale={1.2}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh_wineWhite001.geometry} material={materials['brownLight.030']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_wineWhite001_1.geometry} material={materials['green.025']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_wineWhite001_2.geometry} material={materials['brown.029']} />
      </group>
      <group position={[13.7, 2.375, -5.083]} scale={1.2}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh_wineWhite005.geometry} material={materials['brownLight.030']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_wineWhite005_1.geometry} material={materials['green.025']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_wineWhite005_2.geometry} material={materials['brown.029']} />
      </group>
      <group position={[15.251, 2.375, -3.725]} scale={1.2}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh_wineWhite006.geometry} material={materials['brownLight.030']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_wineWhite006_1.geometry} material={materials['green.025']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_wineWhite006_2.geometry} material={materials['brown.029']} />
      </group>
      <group position={[-14.83, 3.244, 10.173]} scale={1.25}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh_sundae002.geometry} material={materials['_defaultMat.010']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_sundae002_1.geometry} material={materials['purpleLight.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_sundae002_2.geometry} material={materials['brownDark.018']} />
      </group>
      <group position={[2.862, 2.214, 2.977]} rotation={[0.977, -0.196, -0.13]} scale={1.25}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh_soda002.geometry} material={materials['purple.003']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_soda002_1.geometry} material={materials['_defaultMat.011']} />
      </group>
      <group position={[0.156, 0, 16.316]} scale={1.369}>
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh009.geometry} material={materials['Skin.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh009_1.geometry} material={materials['Shirt_Orange.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh009_2.geometry} material={materials['Pants.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh009_3.geometry} material={materials['Shoes.002']} />
      </group>
      <group position={[-14.413, 1.098, 10.377]} rotation={[0, -1.474, 0]} scale={1.369}>
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh011.geometry} material={materials['Skin.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh011_1.geometry} material={materials['Shirt_Yellow.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh011_2.geometry} material={materials['Pants.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh011_3.geometry} material={materials['Shoes.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh011_4.geometry} material={materials['Hair_Grey.001']} />
      </group>
      <group position={[15.189, 0.369, -2.796]} rotation={[Math.PI, -0.097, Math.PI]} scale={1.369}>
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh012.geometry} material={materials['Hair_Black.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh012_1.geometry} material={materials['Skin.002']} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Human_CylinderMesh012_2.geometry}
          material={materials['Shirt_LightGreen.001']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh012_3.geometry} material={materials['Pants.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh012_4.geometry} material={materials['Shoes.002']} />
      </group>
      <group position={[-9.24, 0.122, -12.484]} rotation={[Math.PI, -0.215, Math.PI]} scale={1.369}>
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh013.geometry} material={materials['Skin.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh013_1.geometry} material={materials['Shirt_LightGrey.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh013_2.geometry} material={materials['Pants.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh013_3.geometry} material={materials['Shoes.002']} />
      </group>
      <group position={[8.282, 4.892, -0.913]} rotation={[-Math.PI, 0.744, -Math.PI]} scale={1.369}>
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh016.geometry} material={materials['Hair_Black.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh016_1.geometry} material={materials['Skin.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh016_2.geometry} material={materials['Shirt_LightBlue.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh016_3.geometry} material={materials['Pants.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh016_4.geometry} material={materials['Shoes.002']} />
      </group>
      <group position={[15.972, 4.212, -7.518]} rotation={[-0.369, -0.326, 0.101]} scale={1.369}>
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh020.geometry} material={materials['Hair_Blonde.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh020_1.geometry} material={materials['Skin.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh020_2.geometry} material={materials['Shirt_Red.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh020_3.geometry} material={materials['Pants.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh020_4.geometry} material={materials['Shoes.002']} />
      </group>
      <group position={[-6.278, 4.946, 4.301]} rotation={[Math.PI, -0.242, Math.PI]} scale={1.369}>
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh022.geometry} material={materials['Hair_Blonde.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh022_1.geometry} material={materials['Skin.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh022_2.geometry} material={materials['Shirt_White.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh022_3.geometry} material={materials['Pants.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh022_4.geometry} material={materials['Shoes.002']} />
      </group>
      <group position={[3.779, 4.756, -2.93]} scale={1.369}>
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh023.geometry} material={materials['Hair_Brown.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh023_1.geometry} material={materials['Skin.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh023_2.geometry} material={materials['Shirt_Orange.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh023_3.geometry} material={materials['Pants.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Human_CylinderMesh023_4.geometry} material={materials['Shoes.002']} />
      </group>
      <group position={[-4.442, 0.074, -0.663]} rotation={[0, 0.402, 0]} scale={1.369}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder010.geometry} material={materials['HairTie.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder010_1.geometry} material={materials['Hair_Blonde.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder010_2.geometry} material={materials['Skin.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder010_3.geometry} material={materials['Shirt_Red.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder010_4.geometry} material={materials['Pants.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder010_5.geometry} material={materials['Shoes.002']} />
      </group>
      <group position={[13.242, 0.385, -6.132]} scale={1.369}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder011.geometry} material={materials['HairTie.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder011_1.geometry} material={materials['Hair_Blue.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder011_2.geometry} material={materials['Skin.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder011_3.geometry} material={materials['Shirt_Black.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder011_4.geometry} material={materials['Pants.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder011_5.geometry} material={materials['Shoes.002']} />
      </group>
      <group position={[3.365, 4.664, 2.644]} scale={1.369}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder013.geometry} material={materials['Hair_Red.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder013_1.geometry} material={materials['Skin.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder013_2.geometry} material={materials['Shirt_Purple.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder013_3.geometry} material={materials['Pants.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder013_4.geometry} material={materials['Shoes.002']} />
      </group>
      <group position={[-8.632, 4.786, 4.286]} rotation={[-Math.PI, 0.12, -Math.PI]} scale={1.369}>
        <mesh castShadow receiveShadow geometry={nodes.Cylinder014.geometry} material={materials['Hair_Black.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder014_1.geometry} material={materials['Skin.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder014_2.geometry} material={materials['Shirt_Grey.001']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder014_3.geometry} material={materials['Pants.002']} />
        <mesh castShadow receiveShadow geometry={nodes.Cylinder014_4.geometry} material={materials['Shoes.002']} />
      </group>
      <group position={[-8.368, 3.319, 2.891]} rotation={[Math.PI, -0.384, Math.PI]} scale={1.5}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh_cocktail003.geometry} material={materials['_defaultMat.012']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_cocktail003_1.geometry} material={materials['greyLight.005']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_cocktail003_2.geometry} material={materials['red.024']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_cocktail003_3.geometry} material={materials['brownLight.031']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_cocktail003_4.geometry} material={materials['yellow.006']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_cocktail003_5.geometry} material={materials['green.026']} />
      </group>
      <group position={[-6.423, 3.319, 2.891]} rotation={[-Math.PI, 1.036, -Math.PI]} scale={1.5}>
        <mesh castShadow receiveShadow geometry={nodes.Mesh_cocktail004.geometry} material={materials['_defaultMat.012']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_cocktail004_1.geometry} material={materials['greyLight.005']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_cocktail004_2.geometry} material={materials['red.024']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_cocktail004_3.geometry} material={materials['brownLight.031']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_cocktail004_4.geometry} material={materials['yellow.006']} />
        <mesh castShadow receiveShadow geometry={nodes.Mesh_cocktail004_5.geometry} material={materials['green.026']} />
      </group>
    </group>
  );
};

useGLTF.preload(config.assets.sampleCharactersGLB);
