import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { FC } from 'react';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import { config } from '$lib/config';

type GLTFResult = GLTF & {
  nodes: {
    Border_Baked: THREE.Mesh;
    Busstop001_Baked: THREE.Mesh;
    Gate_Baked: THREE.Mesh;
    Grass_Baked: THREE.Mesh;
    group1794255474_Baked: THREE.Mesh;
    group1794255474001_Baked: THREE.Mesh;
    group1794255474002_Baked: THREE.Mesh;
    group1794255474003_Baked: THREE.Mesh;
    group1794255474004_Baked: THREE.Mesh;
    group1794255474005_Baked: THREE.Mesh;
    group1794255474006_Baked: THREE.Mesh;
    Hydrant001_Baked: THREE.Mesh;
    Picket_fence_Baked: THREE.Mesh;
    Picket_fence001_Baked: THREE.Mesh;
    Picket_fence003_Baked: THREE.Mesh;
    Picket_fence004_Baked: THREE.Mesh;
    Road_Curb003_Baked: THREE.Mesh;
    Road_Curb_Curve002_Baked: THREE.Mesh;
    Sidewalk_Tile_4001_Baked: THREE.Mesh;
    Sidewalk_Tile_4002_Baked: THREE.Mesh;
    Sidewalk_Tile_4003_Baked: THREE.Mesh;
    Sidewalk_Tile_4004_Baked: THREE.Mesh;
    Sidewalk_Tile_4007_Baked: THREE.Mesh;
    Sidewalk_Tile_4008_Baked: THREE.Mesh;
    Sidewalk_Tile_4011_Baked: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034C68A01_1905741736_StaticMe002: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034C68A01_1922145738_StaticMe: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034C68A01_1928173741_StaticMe001: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034C68A01_1945351745_StaticMe001: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034C68A01_1959490749_StaticMe: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034C68A01_2008750751_StaticMe001: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034C68A01_2018005752_StaticMe001: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034C68A01_2022019753_StaticMe001: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034C68A01_2029163755_StaticMe: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1547414354_StaticMe_Bak: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1556808355_StaticMe_Bak: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1677680378_StaticMe_Bak: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1677680378_StaticMe001: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1771392385_StaticMe_Bak: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1771392385_StaticMe001: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1773224386_StaticMe_Bak: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1773224386_StaticMe001: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1846084401_StaticMe_Bak: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1861349405_StaticMe_Bak: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1861349405_StaticMe001: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1861349405_StaticMe002: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1919107416_StaticMe_Bak: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1919107416_StaticMe001: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1919107416_StaticMe002: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1926835418_StaticMe_Bak: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1940333423_StaticMe_Bak: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1940333423_StaticMe001: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1673062376_StaticMe_Bak: THREE.Mesh;
    StaticMeshActor_UAID_50EBF6776034088B01_1919107416_StaticMe004: THREE.Mesh;
    Street_lights001_Baked: THREE.Mesh;
    Street_lights002_Baked: THREE.Mesh;
    Street_lights003_Baked: THREE.Mesh;
    Street_lights004_Baked: THREE.Mesh;
    Street_lights005_Baked: THREE.Mesh;
    Street_lights006_Baked: THREE.Mesh;
    Street_lights007_Baked: THREE.Mesh;
    Street_lights008_Baked: THREE.Mesh;
    Street_lights010_Baked: THREE.Mesh;
    Street_lights011_Baked: THREE.Mesh;
    Street_lights025_Baked: THREE.Mesh;
    Street_lights015_Baked: THREE.Mesh;
    Street_lights014_Baked: THREE.Mesh;
    Street_lights012_Baked: THREE.Mesh;
    Street_Parking_1002_Baked: THREE.Mesh;
    Traffic_lights001_Baked: THREE.Mesh;
    SK_Vehicles_Car_29001_Baked: THREE.Mesh;
    SK_Vehicles_Car_01001_Baked: THREE.Mesh;
    SK_Vehicles_Car_18001_Baked: THREE.Mesh;
  };
  materials: {
    Border_Baked: THREE.MeshStandardMaterial;
    ['Busstop.001_Baked']: THREE.MeshStandardMaterial;
    Gate_Baked: THREE.MeshStandardMaterial;
    Grass_Baked: THREE.MeshStandardMaterial;
    group1794255474_Baked: THREE.MeshStandardMaterial;
    ['group1794255474.001_Baked']: THREE.MeshStandardMaterial;
    ['group1794255474.002_Baked']: THREE.MeshStandardMaterial;
    ['group1794255474.003_Baked']: THREE.MeshStandardMaterial;
    ['group1794255474.004_Baked']: THREE.MeshStandardMaterial;
    ['group1794255474.005_Baked']: THREE.MeshStandardMaterial;
    ['group1794255474.006_Baked']: THREE.MeshStandardMaterial;
    ['Hydrant.001_Baked']: THREE.MeshStandardMaterial;
    ['Picket fence_Baked']: THREE.MeshStandardMaterial;
    ['Picket fence.001_Baked']: THREE.MeshStandardMaterial;
    ['Picket fence.003_Baked']: THREE.MeshStandardMaterial;
    ['Picket fence.004_Baked']: THREE.MeshStandardMaterial;
    ['Road Curb.003_Baked']: THREE.MeshStandardMaterial;
    ['Road Curb Curve.002_Baked']: THREE.MeshStandardMaterial;
    ['Sidewalk Tile 4.001_Baked.001']: THREE.MeshStandardMaterial;
    ['Sidewalk Tile 4.002_Baked.001']: THREE.MeshStandardMaterial;
    ['Sidewalk Tile 4.003_Baked.001']: THREE.MeshStandardMaterial;
    ['Sidewalk Tile 4.004_Baked.001']: THREE.MeshStandardMaterial;
    ['Sidewalk Tile 4.007_Baked.001']: THREE.MeshStandardMaterial;
    ['Sidewalk Tile 4.008_Baked.001']: THREE.MeshStandardMaterial;
    ['Sidewalk Tile 4.011_Baked.001']: THREE.MeshStandardMaterial;
    ['StaticMeshActor_UAID_50EBF6776034C68A01_1905741736_StaticMe.001']: THREE.MeshStandardMaterial;
    ['StaticMeshActor_UAID_50EBF6776034C68A01_1922145738_StaticMe.001']: THREE.MeshStandardMaterial;
    ['StaticMeshActor_UAID_50EBF6776034C68A01_1928173741_StaticMe.002']: THREE.MeshStandardMaterial;
    ['StaticMeshActor_UAID_50EBF6776034C68A01_1945351745_StaticMe.002']: THREE.MeshStandardMaterial;
    ['StaticMeshActor_UAID_50EBF6776034C68A01_1959490749_StaticMe.001']: THREE.MeshStandardMaterial;
    ['StaticMeshActor_UAID_50EBF6776034C68A01_2008750751_StaticMe.002']: THREE.MeshStandardMaterial;
    ['StaticMeshActor_UAID_50EBF6776034C68A01_2018005752_StaticMe.002']: THREE.MeshStandardMaterial;
    ['StaticMeshActor_UAID_50EBF6776034C68A01_2022019753_StaticMe.002']: THREE.MeshStandardMaterial;
    ['StaticMeshActor_UAID_50EBF6776034C68A01_2029163755_StaticMe.001']: THREE.MeshStandardMaterial;
    StaticMeshActor_UAID_50EBF6776034088B01_1547414354_StaticMe: THREE.MeshStandardMaterial;
    StaticMeshActor_UAID_50EBF6776034088B01_1556808355_StaticMe: THREE.MeshStandardMaterial;
    StaticMeshActor_UAID_50EBF6776034088B01_1677680378_StaticMe: THREE.MeshStandardMaterial;
    ['StaticMeshActor_UAID_50EBF6776034088B01_1677680378_StaticMe.002']: THREE.MeshStandardMaterial;
    StaticMeshActor_UAID_50EBF6776034088B01_1771392385_StaticMe: THREE.MeshStandardMaterial;
    ['StaticMeshActor_UAID_50EBF6776034088B01_1771392385_StaticMe.002']: THREE.MeshStandardMaterial;
    StaticMeshActor_UAID_50EBF6776034088B01_1773224386_StaticMe: THREE.MeshStandardMaterial;
    ['StaticMeshActor_UAID_50EBF6776034088B01_1773224386_StaticMe.002']: THREE.MeshStandardMaterial;
    StaticMeshActor_UAID_50EBF6776034088B01_1846084401_StaticMe: THREE.MeshStandardMaterial;
    StaticMeshActor_UAID_50EBF6776034088B01_1861349405_StaticMe: THREE.MeshStandardMaterial;
    ['StaticMeshActor_UAID_50EBF6776034088B01_1861349405_StaticMe.003']: THREE.MeshStandardMaterial;
    ['StaticMeshActor_UAID_50EBF6776034088B01_1861349405_StaticMe.004']: THREE.MeshStandardMaterial;
    StaticMeshActor_UAID_50EBF6776034088B01_1919107416_StaticMe: THREE.MeshStandardMaterial;
    ['StaticMeshActor_UAID_50EBF6776034088B01_1919107416_StaticMe.003']: THREE.MeshStandardMaterial;
    ['StaticMeshActor_UAID_50EBF6776034088B01_1919107416_StaticMe.005']: THREE.MeshStandardMaterial;
    StaticMeshActor_UAID_50EBF6776034088B01_1926835418_StaticMe: THREE.MeshStandardMaterial;
    StaticMeshActor_UAID_50EBF6776034088B01_1940333423_StaticMe: THREE.MeshStandardMaterial;
    ['StaticMeshActor_UAID_50EBF6776034088B01_1940333423_StaticMe.002']: THREE.MeshStandardMaterial;
    StaticMeshActor_UAID_50EBF6776034088B01_1673062376_StaticMe: THREE.MeshStandardMaterial;
    ['StaticMeshActor_UAID_50EBF6776034088B01_1919107416_StaticMe.006']: THREE.MeshStandardMaterial;
    ['Street lights.001_Baked.001']: THREE.MeshStandardMaterial;
    ['Street lights.002_Baked.001']: THREE.MeshStandardMaterial;
    ['Street lights.003_Baked.001']: THREE.MeshStandardMaterial;
    ['Street lights.004_Baked.001']: THREE.MeshStandardMaterial;
    ['Street lights.005_Baked.001']: THREE.MeshStandardMaterial;
    ['Street lights.006_Baked.001']: THREE.MeshStandardMaterial;
    ['Street lights.007_Baked.001']: THREE.MeshStandardMaterial;
    ['Street lights.008_Baked.001']: THREE.MeshStandardMaterial;
    ['Street lights.010_Baked.001']: THREE.MeshStandardMaterial;
    ['Street lights.011_Baked.001']: THREE.MeshStandardMaterial;
    ['Street lights.025_Baked.001']: THREE.MeshStandardMaterial;
    ['Street lights.015_Baked.001']: THREE.MeshStandardMaterial;
    ['Street lights.014_Baked.001']: THREE.MeshStandardMaterial;
    ['Street lights.012_Baked.001']: THREE.MeshStandardMaterial;
    ['Street Parking 1.002_Baked.005']: THREE.MeshStandardMaterial;
    ['Traffic lights.001_Baked.001']: THREE.MeshStandardMaterial;
    ['SK_Vehicles_Car_29.001_Baked.001']: THREE.MeshStandardMaterial;
    ['SK_Vehicles_Car_01.001_Baked.001']: THREE.MeshStandardMaterial;
    ['SK_Vehicles_Car_18.001_Baked.001']: THREE.MeshStandardMaterial;
  };
};

export const Environment: FC<GroupProps> = (props) => {
  const { nodes, materials } = useGLTF(config.assets.environmentGLB) as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Border_Baked.geometry} material={materials.Border_Baked} position={[-89.581, -0.423, 90.676]} />
      <mesh
        geometry={nodes.Busstop001_Baked.geometry}
        material={materials['Busstop.001_Baked']}
        position={[-54.4, 0, 13.362]}
        scale={3.333}
      />
      <mesh geometry={nodes.Gate_Baked.geometry} material={materials.Gate_Baked} position={[48.111, 0.17, 13.06]} scale={1.45} />
      <mesh geometry={nodes.Grass_Baked.geometry} material={materials.Grass_Baked} position={[0, -0.837, 0]} />
      <mesh
        geometry={nodes.group1794255474_Baked.geometry}
        material={materials.group1794255474_Baked}
        position={[64.934, 0.012, 0.881]}
        rotation={[Math.PI, -0.315, Math.PI]}
        scale={[7, 5, 7]}
      />
      <mesh
        geometry={nodes.group1794255474001_Baked.geometry}
        material={materials['group1794255474.001_Baked']}
        position={[55.014, 0.012, 36.506]}
        scale={[7, 6, 7]}
      />
      <mesh
        geometry={nodes.group1794255474002_Baked.geometry}
        material={materials['group1794255474.002_Baked']}
        position={[70.153, 0.012, 9.686]}
        rotation={[0, -0.243, 0]}
        scale={[7, 4, 7]}
      />
      <mesh
        geometry={nodes.group1794255474003_Baked.geometry}
        material={materials['group1794255474.003_Baked']}
        position={[51.792, 0.012, 26.292]}
        rotation={[0, 0.701, 0]}
        scale={[7, 5, 7]}
      />
      <mesh
        geometry={nodes.group1794255474004_Baked.geometry}
        material={materials['group1794255474.004_Baked']}
        position={[61.612, 0.012, 28.657]}
        rotation={[0, 0.701, 0]}
        scale={[7, 4, 7]}
      />
      <mesh
        geometry={nodes.group1794255474005_Baked.geometry}
        material={materials['group1794255474.005_Baked']}
        position={[55.942, 0.012, 6.554]}
        scale={[7, 3, 7]}
      />
      <mesh
        geometry={nodes.group1794255474006_Baked.geometry}
        material={materials['group1794255474.006_Baked']}
        position={[54.108, 0.012, -5.994]}
        rotation={[Math.PI, -0.315, Math.PI]}
        scale={7}
      />
      <mesh
        geometry={nodes.Hydrant001_Baked.geometry}
        material={materials['Hydrant.001_Baked']}
        position={[-46.284, 0.065, 13.799]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.Picket_fence_Baked.geometry}
        material={materials['Picket fence_Baked']}
        position={[48.509, 2.472, 38.107]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.45}
      />
      <mesh
        geometry={nodes.Picket_fence001_Baked.geometry}
        material={materials['Picket fence.001_Baked']}
        position={[48.509, 2.472, -12.034]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.45}
      />
      <mesh
        geometry={nodes.Picket_fence003_Baked.geometry}
        material={materials['Picket fence.003_Baked']}
        position={[68.237, 2.472, -12]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.45}
      />
      <mesh
        geometry={nodes.Picket_fence004_Baked.geometry}
        material={materials['Picket fence.004_Baked']}
        position={[48.509, 2.472, 77.56]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.45}
      />
      <mesh
        geometry={nodes.Road_Curb003_Baked.geometry}
        material={materials['Road Curb.003_Baked']}
        position={[14.398, 0.068, 46.373]}
        rotation={[0, 1.571, 0]}
        scale={2.5}
      />
      <mesh
        geometry={nodes.Road_Curb_Curve002_Baked.geometry}
        material={materials['Road Curb Curve.002_Baked']}
        position={[48.124, 0, 71.816]}
        rotation={[0, 1.571, 0]}
        scale={3}
      />
      <mesh
        geometry={nodes.Sidewalk_Tile_4001_Baked.geometry}
        material={materials['Sidewalk Tile 4.001_Baked.001']}
        position={[11.557, -0.259, 123.421]}
        rotation={[0, 1.571, 0]}
        scale={2.5}
      />
      <mesh
        geometry={nodes.Sidewalk_Tile_4002_Baked.geometry}
        material={materials['Sidewalk Tile 4.002_Baked.001']}
        position={[-3.441, -0.259, 10.94]}
        scale={2.5}
      />
      <mesh
        geometry={nodes.Sidewalk_Tile_4003_Baked.geometry}
        material={materials['Sidewalk Tile 4.003_Baked.001']}
        position={[-63.433, -0.259, 70.935]}
        scale={2.5}
      />
      <mesh
        geometry={nodes.Sidewalk_Tile_4004_Baked.geometry}
        material={materials['Sidewalk Tile 4.004_Baked.001']}
        position={[-123.438, -0.259, 10.947]}
        scale={2.5}
      />
      <mesh
        geometry={nodes.Sidewalk_Tile_4007_Baked.geometry}
        material={materials['Sidewalk Tile 4.007_Baked.001']}
        position={[-123.444, -0.259, -49.046]}
        scale={2.5}
      />
      <mesh
        geometry={nodes.Sidewalk_Tile_4008_Baked.geometry}
        material={materials['Sidewalk Tile 4.008_Baked.001']}
        position={[-3.452, -0.259, -49.06]}
        scale={2.5}
      />
      <mesh
        geometry={nodes.Sidewalk_Tile_4011_Baked.geometry}
        material={materials['Sidewalk Tile 4.011_Baked.001']}
        position={[71.55, -0.259, 63.418]}
        rotation={[0, 1.571, 0]}
        scale={2.5}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034C68A01_1905741736_StaticMe002.geometry}
        material={materials['StaticMeshActor_UAID_50EBF6776034C68A01_1905741736_StaticMe.001']}
        position={[-55.379, 0, 66.881]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034C68A01_1922145738_StaticMe.geometry}
        material={materials['StaticMeshActor_UAID_50EBF6776034C68A01_1922145738_StaticMe.001']}
        position={[-75.926, 0, 3.369]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034C68A01_1928173741_StaticMe001.geometry}
        material={materials['StaticMeshActor_UAID_50EBF6776034C68A01_1928173741_StaticMe.002']}
        position={[-54.895, 0, 0.764]}
        rotation={[0, Math.PI / 2, 0]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034C68A01_1945351745_StaticMe001.geometry}
        material={materials['StaticMeshActor_UAID_50EBF6776034C68A01_1945351745_StaticMe.002']}
        position={[25.47, 0, -57.57]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034C68A01_1959490749_StaticMe.geometry}
        material={materials['StaticMeshActor_UAID_50EBF6776034C68A01_1959490749_StaticMe.001']}
        position={[-4.024, 0, -53.787]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034C68A01_2008750751_StaticMe001.geometry}
        material={materials['StaticMeshActor_UAID_50EBF6776034C68A01_2008750751_StaticMe.002']}
        position={[-89.096, 0, -54.752]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034C68A01_2018005752_StaticMe001.geometry}
        material={materials['StaticMeshActor_UAID_50EBF6776034C68A01_2018005752_StaticMe.002']}
        position={[-59.283, 0, 56.545]}
        rotation={[0, Math.PI / 2, 0]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034C68A01_2022019753_StaticMe001.geometry}
        material={materials['StaticMeshActor_UAID_50EBF6776034C68A01_2022019753_StaticMe.002']}
        position={[53.896, 0, -56.3]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034C68A01_2029163755_StaticMe.geometry}
        material={materials['StaticMeshActor_UAID_50EBF6776034C68A01_2029163755_StaticMe.001']}
        position={[-60.072, 0, -60.492]}
        scale={3}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1547414354_StaticMe_Bak.geometry}
        material={materials.StaticMeshActor_UAID_50EBF6776034088B01_1547414354_StaticMe}
        position={[-48.344, 4.32, -43.459]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1556808355_StaticMe_Bak.geometry}
        material={materials.StaticMeshActor_UAID_50EBF6776034088B01_1556808355_StaticMe}
        position={[45.263, 39.981, -50.931]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1677680378_StaticMe_Bak.geometry}
        material={materials.StaticMeshActor_UAID_50EBF6776034088B01_1677680378_StaticMe}
        position={[-41.906, 0.06, -48.826]}
        rotation={[0, 1.571, 0]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1677680378_StaticMe001.geometry}
        material={materials['StaticMeshActor_UAID_50EBF6776034088B01_1677680378_StaticMe.002']}
        position={[-41.906, 0.06, -72.14]}
        rotation={[0, 1.571, 0]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1771392385_StaticMe_Bak.geometry}
        material={materials.StaticMeshActor_UAID_50EBF6776034088B01_1771392385_StaticMe}
        position={[-42.016, 3.504, 66.523]}
        rotation={[Math.PI, -Math.PI / 2, 0]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1771392385_StaticMe001.geometry}
        material={materials['StaticMeshActor_UAID_50EBF6776034088B01_1771392385_StaticMe.002']}
        position={[-41.811, 3.271, 66.793]}
        rotation={[2.887, -0.038, 0.146]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1773224386_StaticMe_Bak.geometry}
        material={materials.StaticMeshActor_UAID_50EBF6776034088B01_1773224386_StaticMe}
        position={[-42.134, 1.624, 69.005]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1773224386_StaticMe001.geometry}
        material={materials['StaticMeshActor_UAID_50EBF6776034088B01_1773224386_StaticMe.002']}
        position={[-41.374, 0.068, 67.865]}
        rotation={[-0.067, -0.033, 0.039]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1846084401_StaticMe_Bak.geometry}
        material={materials.StaticMeshActor_UAID_50EBF6776034088B01_1846084401_StaticMe}
        position={[17.759, -0.046, -46.697]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1861349405_StaticMe_Bak.geometry}
        material={materials.StaticMeshActor_UAID_50EBF6776034088B01_1861349405_StaticMe}
        position={[9.457, 0.413, -46.714]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1861349405_StaticMe001.geometry}
        material={materials['StaticMeshActor_UAID_50EBF6776034088B01_1861349405_StaticMe.003']}
        position={[11.303, 0.413, -46.714]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1861349405_StaticMe002.geometry}
        material={materials['StaticMeshActor_UAID_50EBF6776034088B01_1861349405_StaticMe.004']}
        position={[13.149, 0.413, -46.714]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1919107416_StaticMe_Bak.geometry}
        material={materials.StaticMeshActor_UAID_50EBF6776034088B01_1919107416_StaticMe}
        position={[-41.915, 0.36, 66.731]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1919107416_StaticMe001.geometry}
        material={materials['StaticMeshActor_UAID_50EBF6776034088B01_1919107416_StaticMe.003']}
        position={[-41.915, 0.36, 68.993]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1919107416_StaticMe002.geometry}
        material={materials['StaticMeshActor_UAID_50EBF6776034088B01_1919107416_StaticMe.005']}
        position={[-41.915, 0.36, 71.392]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1926835418_StaticMe_Bak.geometry}
        material={materials.StaticMeshActor_UAID_50EBF6776034088B01_1926835418_StaticMe}
        position={[66.748, -0.033, -51.048]}
        rotation={[0, 1.571, 0]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1940333423_StaticMe_Bak.geometry}
        material={materials.StaticMeshActor_UAID_50EBF6776034088B01_1940333423_StaticMe}
        position={[-41.889, 3.582, 71.431]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1940333423_StaticMe001.geometry}
        material={materials['StaticMeshActor_UAID_50EBF6776034088B01_1940333423_StaticMe.002']}
        position={[-42.436, 3.72, 66.618]}
        rotation={[-0.109, 0, 0.292]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1673062376_StaticMe_Bak.geometry}
        material={materials.StaticMeshActor_UAID_50EBF6776034088B01_1673062376_StaticMe}
        position={[51.176, 0.207, 1.846]}
        rotation={[0, 1.534, 0]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.StaticMeshActor_UAID_50EBF6776034088B01_1919107416_StaticMe004.geometry}
        material={materials['StaticMeshActor_UAID_50EBF6776034088B01_1919107416_StaticMe.006']}
        position={[50.28, 0.062, -3.024]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.Street_lights001_Baked.geometry}
        material={materials['Street lights.001_Baked.001']}
        position={[-19.919, -0.212, 0.468]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.Street_lights002_Baked.geometry}
        material={materials['Street lights.002_Baked.001']}
        position={[-41.075, 0.025, -60.663]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.Street_lights003_Baked.geometry}
        material={materials['Street lights.003_Baked.001']}
        position={[-51.572, 0.035, -41.707]}
        rotation={[0, 1.571, 0]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.Street_lights004_Baked.geometry}
        material={materials['Street lights.004_Baked.001']}
        position={[-72.543, 0.035, -40.099]}
        rotation={[0, 1.571, 0]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.Street_lights005_Baked.geometry}
        material={materials['Street lights.005_Baked.001']}
        position={[-0.904, -0.212, -19.039]}
        rotation={[0, -1.571, 0]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.Street_lights006_Baked.geometry}
        material={materials['Street lights.006_Baked.001']}
        position={[71.547, 0.019, -19.106]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.Street_lights007_Baked.geometry}
        material={materials['Street lights.007_Baked.001']}
        position={[35.181, 0.019, -41.508]}
        rotation={[0, 1.571, 0]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.Street_lights008_Baked.geometry}
        material={materials['Street lights.008_Baked.001']}
        position={[-18.239, 0.021, -77.411]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.Street_lights010_Baked.geometry}
        material={materials['Street lights.010_Baked.001']}
        position={[-60.459, -0.212, 15.421]}
        rotation={[0, 1.571, 0]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.Street_lights011_Baked.geometry}
        material={materials['Street lights.011_Baked.001']}
        position={[-41.015, -0.212, 60.437]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.Street_lights025_Baked.geometry}
        material={materials['Street lights.025_Baked.001']}
        position={[0.351, -0.01, 43.774]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.Street_lights015_Baked.geometry}
        material={materials['Street lights.015_Baked.001']}
        position={[44.519, -0.009, 58.985]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.Street_lights014_Baked.geometry}
        material={materials['Street lights.014_Baked.001']}
        position={[44.519, -0.009, 29.653]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.Street_lights012_Baked.geometry}
        material={materials['Street lights.012_Baked.001']}
        position={[44.519, -0.009, 0.427]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.Street_Parking_1002_Baked.geometry}
        material={materials['Street Parking 1.002_Baked.005']}
        position={[2.953, 0.066, 61.237]}
        rotation={[0, 1.571, 0]}
        scale={2.5}
      />
      <mesh
        geometry={nodes.Traffic_lights001_Baked.geometry}
        material={materials['Traffic lights.001_Baked.001']}
        position={[-18.446, 0, -43.322]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.SK_Vehicles_Car_29001_Baked.geometry}
        material={materials['SK_Vehicles_Car_29.001_Baked.001']}
        position={[-11.161, 0.068, 73.446]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.SK_Vehicles_Car_01001_Baked.geometry}
        material={materials['SK_Vehicles_Car_01.001_Baked.001']}
        position={[12.052, 0.082, 61.335]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={3.333}
      />
      <mesh
        geometry={nodes.SK_Vehicles_Car_18001_Baked.geometry}
        material={materials['SK_Vehicles_Car_18.001_Baked.001']}
        position={[-13.039, 0.082, 49.343]}
        scale={2.5}
      />
    </group>
  );
};

useGLTF.preload(config.assets.environmentGLB);
