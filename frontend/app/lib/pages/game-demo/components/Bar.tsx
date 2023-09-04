import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { FC } from 'react';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import { config } from '$lib/config';

type GLTFResult = GLTF & {
  nodes: {
    barrel_Baked: THREE.Mesh;
    Analog_Cock_Baked: THREE.Mesh;
    barrel001_Baked: THREE.Mesh;
    barrel002_Baked: THREE.Mesh;
    board_cutting_board001_Cube117_Baked: THREE.Mesh;
    Billboard_Baked: THREE.Mesh;
    Box_1_mesh001_Baked: THREE.Mesh;
    Box_2_mesh001_Baked: THREE.Mesh;
    Box_1_mesh002_Baked: THREE.Mesh;
    Bottle_Collection_lower_Baked: THREE.Mesh;
    Bottle_Collection_upper_Baked: THREE.Mesh;
    Counter_Baked: THREE.Mesh;
    Crate_Baked: THREE.Mesh;
    Crate_2_Baked: THREE.Mesh;
    Chair_Baked: THREE.Mesh;
    Extinguisher_Mesh003_Baked: THREE.Mesh;
    Calender_01_Plane003_Baked: THREE.Mesh;
    Environment_CanFridge_Baked: THREE.Mesh;
    Environment_CanFridge001_Baked: THREE.Mesh;
    cookingKnife_Baked: THREE.Mesh;
    Environment_CanFridge_Door_Environment_CanFridge_Door_Atlas_Bak: THREE.Mesh;
    Environment_CanFridge_Door_Environment_CanFridge_Door_Atlas001: THREE.Mesh;
    Cube010_Baked: THREE.Mesh;
    Cube011_Baked: THREE.Mesh;
    Cube012_Baked: THREE.Mesh;
    Cube013_Baked: THREE.Mesh;
    Cube014_Baked: THREE.Mesh;
    Cube015_Baked: THREE.Mesh;
    Cube016_Baked: THREE.Mesh;
    Cube017_Baked: THREE.Mesh;
    Desk_Baked: THREE.Mesh;
    Cube021_Baked: THREE.Mesh;
    Floor_Ground_Baked: THREE.Mesh;
    Floor_Wood_Baked: THREE.Mesh;
    Floor_Tiles_Baked: THREE.Mesh;
    Environment_CanFridge_Door_Environment_CanFridge_Door_Glass001: THREE.Mesh;
    Environment_CanFridge_Door_Environment_CanFridge_Door_Glass003: THREE.Mesh;
    Glasses001: THREE.Mesh;
    group50311005_Baked: THREE.Mesh;
    Locker_mesh001_Baked: THREE.Mesh;
    Locker_mesh002_Baked: THREE.Mesh;
    Locker_mesh003_Baked: THREE.Mesh;
    lemonHalf_Baked: THREE.Mesh;
    Message_Board_Baked: THREE.Mesh;
    Papers_Baked: THREE.Mesh;
    ModernKitchenStool1001_Baked: THREE.Mesh;
    ModernKitchenStool1002_Baked: THREE.Mesh;
    ModernKitchenStool1003_Baked: THREE.Mesh;
    ModernKitchenStool1004_Baked: THREE.Mesh;
    Kitchen_Sink_Baked: THREE.Mesh;
    ModernKitchenStool1005_Baked: THREE.Mesh;
    ModernKitchenStool1006_Baked: THREE.Mesh;
    ModernKitchenStool1007_Baked: THREE.Mesh;
    ModernKitchenStool1008_Baked: THREE.Mesh;
    misc_ice_tray_Cube019_Baked: THREE.Mesh;
    lemon003_Baked: THREE.Mesh;
    MainBuilding_low_Baked: THREE.Mesh;
    Mug_with_office_tools_Baked: THREE.Mesh;
    plant_01_Cube006_Baked: THREE.Mesh;
    Pot_Plant_Baked: THREE.Mesh;
    Pot_Plant001_Baked: THREE.Mesh;
    Shelf_lower_Baked: THREE.Mesh;
    Shelf_upper_Baked: THREE.Mesh;
    StorageRack_2_mesh001_Baked: THREE.Mesh;
    StorageRack_1_mesh001_Baked: THREE.Mesh;
    Table_Baked: THREE.Mesh;
    Table001_Baked: THREE.Mesh;
    Table002_Baked: THREE.Mesh;
    Table003_Baked: THREE.Mesh;
    Windows_low001: THREE.Mesh;
  };
  materials: {
    barrel_Baked: THREE.MeshStandardMaterial;
    Analog_Cock_Baked: THREE.MeshStandardMaterial;
    ['barrel.001_Baked']: THREE.MeshStandardMaterial;
    ['barrel.002_Baked']: THREE.MeshStandardMaterial;
    ['board_cutting_board.001_Cube.117_Baked']: THREE.MeshStandardMaterial;
    Billboard_Baked: THREE.MeshStandardMaterial;
    ['Box_1_mesh.001_Baked']: THREE.MeshStandardMaterial;
    ['Box_2_mesh.001_Baked']: THREE.MeshStandardMaterial;
    ['Box_1_mesh.002_Baked']: THREE.MeshStandardMaterial;
    ['Bottle Collection lower_Baked']: THREE.MeshStandardMaterial;
    ['Bottle Collection upper_Baked']: THREE.MeshStandardMaterial;
    Counter_Baked: THREE.MeshStandardMaterial;
    Crate_Baked: THREE.MeshStandardMaterial;
    ['Crate 2_Baked']: THREE.MeshStandardMaterial;
    Chair_Baked: THREE.MeshStandardMaterial;
    ['Extinguisher_Mesh.003_Baked']: THREE.MeshStandardMaterial;
    ['Calender_01_Plane.003_Baked']: THREE.MeshStandardMaterial;
    Environment_CanFridge_Baked: THREE.MeshStandardMaterial;
    ['Environment_CanFridge.001_Baked']: THREE.MeshStandardMaterial;
    cookingKnife_Baked: THREE.MeshStandardMaterial;
    Environment_CanFridge_Door_Environment_CanFridge_Door_Atlas_Bak: THREE.MeshStandardMaterial;
    ['Environment_CanFridge_Door_Environment_CanFridge_Door_Atlas.001']: THREE.MeshStandardMaterial;
    ['Cube.010_Baked']: THREE.MeshStandardMaterial;
    ['Cube.011_Baked']: THREE.MeshStandardMaterial;
    ['Cube.012_Baked']: THREE.MeshStandardMaterial;
    ['Cube.013_Baked']: THREE.MeshStandardMaterial;
    ['Cube.014_Baked']: THREE.MeshStandardMaterial;
    ['Cube.015_Baked']: THREE.MeshStandardMaterial;
    ['Cube.016_Baked']: THREE.MeshStandardMaterial;
    ['Cube.017_Baked']: THREE.MeshStandardMaterial;
    Desk_Baked: THREE.MeshStandardMaterial;
    ['Cube.021_Baked']: THREE.MeshStandardMaterial;
    Floor_Ground_Baked: THREE.MeshStandardMaterial;
    Floor_Wood_Baked: THREE.MeshStandardMaterial;
    Floor_Tiles_Baked: THREE.MeshStandardMaterial;
    ['Glass.002']: THREE.MeshPhysicalMaterial;
    Glass: THREE.MeshPhysicalMaterial;
    group50311005_Baked: THREE.MeshStandardMaterial;
    ['Locker_mesh.001_Baked']: THREE.MeshStandardMaterial;
    ['Locker_mesh.002_Baked']: THREE.MeshStandardMaterial;
    ['Locker_mesh.003_Baked']: THREE.MeshStandardMaterial;
    lemonHalf_Baked: THREE.MeshStandardMaterial;
    Message_Board_Baked: THREE.MeshStandardMaterial;
    Papers_Baked: THREE.MeshStandardMaterial;
    ['ModernKitchenStool1.001_Baked']: THREE.MeshStandardMaterial;
    ['ModernKitchenStool1.002_Baked']: THREE.MeshStandardMaterial;
    ['ModernKitchenStool1.003_Baked']: THREE.MeshStandardMaterial;
    ['ModernKitchenStool1.004_Baked']: THREE.MeshStandardMaterial;
    Kitchen_Sink_Baked: THREE.MeshStandardMaterial;
    ['ModernKitchenStool1.005_Baked']: THREE.MeshStandardMaterial;
    ['ModernKitchenStool1.006_Baked']: THREE.MeshStandardMaterial;
    ['ModernKitchenStool1.007_Baked']: THREE.MeshStandardMaterial;
    ['ModernKitchenStool1.008_Baked']: THREE.MeshStandardMaterial;
    ['misc_ice_tray_Cube.019_Baked']: THREE.MeshStandardMaterial;
    ['lemon.003_Baked']: THREE.MeshStandardMaterial;
    MainBuilding_low_Baked: THREE.MeshStandardMaterial;
    ['Mug with office tools_Baked']: THREE.MeshStandardMaterial;
    ['plant_01_Cube.006_Baked']: THREE.MeshStandardMaterial;
    ['Pot Plant_Baked']: THREE.MeshStandardMaterial;
    ['Pot Plant.001_Baked']: THREE.MeshStandardMaterial;
    ['Shelf lower_Baked.001']: THREE.MeshStandardMaterial;
    ['Shelf upper_Baked.001']: THREE.MeshStandardMaterial;
    ['StorageRack_2_mesh.001_Baked.001']: THREE.MeshStandardMaterial;
    ['StorageRack_1_mesh.001_Baked.001']: THREE.MeshStandardMaterial;
    ['Table_Baked.001']: THREE.MeshStandardMaterial;
    ['Table.001_Baked.001']: THREE.MeshStandardMaterial;
    ['Table.002_Baked.001']: THREE.MeshStandardMaterial;
    ['Table.003_Baked.001']: THREE.MeshStandardMaterial;
    ['Glass.003']: THREE.MeshPhysicalMaterial;
  };
};

export const Bar: FC<GroupProps> = (props) => {
  const { nodes, materials } = useGLTF(config.assets.barGLB) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.barrel_Baked.geometry}
        material={materials.barrel_Baked}
        position={[-0.832, 3.317, -3.003]}
        rotation={[0, 0.239, 0]}
        scale={2}
      />
      <mesh
        geometry={nodes.Analog_Cock_Baked.geometry}
        material={materials.Analog_Cock_Baked}
        position={[-0.755, 4.256, -16.957]}
        rotation={[0, -1.571, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.barrel001_Baked.geometry}
        material={materials['barrel.001_Baked']}
        position={[-12.956, 3.224, -15.478]}
        rotation={[0, 1.571, 0]}
        scale={2}
      />
      <mesh
        geometry={nodes.barrel002_Baked.geometry}
        material={materials['barrel.002_Baked']}
        position={[-11.571, 3.224, -15.478]}
        rotation={[-Math.PI, 1.542, -Math.PI]}
        scale={2}
      />
      <mesh
        geometry={nodes.board_cutting_board001_Cube117_Baked.geometry}
        material={materials['board_cutting_board.001_Cube.117_Baked']}
        position={[-2.031, 2.503, -1.322]}
        rotation={[-Math.PI, 0.713, -Math.PI]}
        scale={0.15}
      />
      <mesh
        geometry={nodes.Billboard_Baked.geometry}
        material={materials.Billboard_Baked}
        position={[1.236, 3.255, -16.941]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={23.201}
      />
      <mesh
        geometry={nodes.Box_1_mesh001_Baked.geometry}
        material={materials['Box_1_mesh.001_Baked']}
        position={[-13.864, 5.188, -16.075]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.5}
      />
      <mesh
        geometry={nodes.Box_2_mesh001_Baked.geometry}
        material={materials['Box_2_mesh.001_Baked']}
        position={[-15.084, 5.447, -15.849]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.5}
      />
      <mesh
        geometry={nodes.Box_1_mesh002_Baked.geometry}
        material={materials['Box_1_mesh.002_Baked']}
        position={[-15.241, 3.651, -16.202]}
        rotation={[Math.PI / 2, 0, -2.011]}
        scale={2.5}
      />
      <mesh
        geometry={nodes.Bottle_Collection_lower_Baked.geometry}
        material={materials['Bottle Collection lower_Baked']}
        position={[-9.513, 4.401, -3.754]}
        scale={1.2}
      />
      <mesh
        geometry={nodes.Bottle_Collection_upper_Baked.geometry}
        material={materials['Bottle Collection upper_Baked']}
        position={[-11.797, 5.806, -3.277]}
        scale={1.2}
      />
      <mesh geometry={nodes.Counter_Baked.geometry} material={materials.Counter_Baked} position={[-5.292, 0, 1.86]} />
      <mesh
        geometry={nodes.Crate_Baked.geometry}
        material={materials.Crate_Baked}
        position={[-14.949, 0.676, -15.546]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={2}
      />
      <mesh
        geometry={nodes.Crate_2_Baked.geometry}
        material={materials['Crate 2_Baked']}
        position={[-8.77, 0.586, -15.546]}
        rotation={[Math.PI / 2, 0, 0.337]}
        scale={2}
      />
      <mesh
        geometry={nodes.Chair_Baked.geometry}
        material={materials.Chair_Baked}
        position={[-5.66, 0.789, -14.335]}
        rotation={[-Math.PI, 0.269, -Math.PI]}
        scale={0.075}
      />
      <mesh
        geometry={nodes.Extinguisher_Mesh003_Baked.geometry}
        material={materials['Extinguisher_Mesh.003_Baked']}
        position={[0.987, 0.635, -14.232]}
        scale={0.25}
      />
      <mesh
        geometry={nodes.Calender_01_Plane003_Baked.geometry}
        material={materials['Calender_01_Plane.003_Baked']}
        position={[-2.496, 3.967, -16.985]}
        scale={0.075}
      />
      <mesh
        geometry={nodes.Environment_CanFridge_Baked.geometry}
        material={materials.Environment_CanFridge_Baked}
        position={[-15.167, 3.012, -13.203]}
        rotation={[0, 1.571, 0]}
        scale={1.25}
      />
      <mesh
        geometry={nodes.Environment_CanFridge001_Baked.geometry}
        material={materials['Environment_CanFridge.001_Baked']}
        position={[-15.167, 3.012, -10.109]}
        rotation={[0, 1.571, 0]}
        scale={1.25}
      />
      <mesh
        geometry={nodes.cookingKnife_Baked.geometry}
        material={materials.cookingKnife_Baked}
        position={[-2.157, 2.517, -1.05]}
        rotation={[-3.006, -1.191, -Math.PI]}
      />
      <mesh
        geometry={nodes.Environment_CanFridge_Door_Environment_CanFridge_Door_Atlas_Bak.geometry}
        material={materials.Environment_CanFridge_Door_Environment_CanFridge_Door_Atlas_Bak}
        position={[0.602, 0.066, -0.184]}
      />
      <mesh
        geometry={nodes.Environment_CanFridge_Door_Environment_CanFridge_Door_Atlas001.geometry}
        material={materials['Environment_CanFridge_Door_Environment_CanFridge_Door_Atlas.001']}
        position={[0.602, 0.066, -0.184]}
      />
      <mesh
        geometry={nodes.Cube010_Baked.geometry}
        material={materials['Cube.010_Baked']}
        position={[14.172, 0.832, -1.72]}
        scale={[2.771, 0.75, 1.111]}
      />
      <mesh
        geometry={nodes.Cube011_Baked.geometry}
        material={materials['Cube.011_Baked']}
        position={[14.172, 0.832, 0.998]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[2.771, 0.75, 1.111]}
      />
      <mesh
        geometry={nodes.Cube012_Baked.geometry}
        material={materials['Cube.012_Baked']}
        position={[14.172, 0.832, 6.591]}
        scale={[2.771, 0.75, 1.111]}
      />
      <mesh
        geometry={nodes.Cube013_Baked.geometry}
        material={materials['Cube.013_Baked']}
        position={[14.172, 0.832, 9.309]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[2.771, 0.75, 1.111]}
      />
      <mesh
        geometry={nodes.Cube014_Baked.geometry}
        material={materials['Cube.014_Baked']}
        position={[14.172, 0.832, -10.04]}
        scale={[2.771, 0.75, 1.111]}
      />
      <mesh
        geometry={nodes.Cube015_Baked.geometry}
        material={materials['Cube.015_Baked']}
        position={[14.172, 0.832, -7.321]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[2.771, 0.75, 1.111]}
      />
      <mesh
        geometry={nodes.Cube016_Baked.geometry}
        material={materials['Cube.016_Baked']}
        position={[14.172, 0.832, 14.941]}
        scale={[2.771, 0.75, 1.111]}
      />
      <mesh
        geometry={nodes.Cube017_Baked.geometry}
        material={materials['Cube.017_Baked']}
        position={[14.172, 0.832, -15.689]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[2.771, 0.75, 1.111]}
      />
      <mesh
        geometry={nodes.Desk_Baked.geometry}
        material={materials.Desk_Baked}
        position={[-6.24, 0.153, -15.992]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[4, 3, 5]}
      />
      <mesh
        geometry={nodes.Cube021_Baked.geometry}
        material={materials['Cube.021_Baked']}
        position={[-15.456, 3.1, 8.951]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[6, 0.15, 0.8]}
      />
      <mesh
        geometry={nodes.Floor_Ground_Baked.geometry}
        material={materials.Floor_Ground_Baked}
        position={[0.491, -0.648, -0.246]}
        scale={[17, 1, 17]}
      />
      <mesh
        geometry={nodes.Floor_Wood_Baked.geometry}
        material={materials.Floor_Wood_Baked}
        position={[3.73, -0.009, -0.13]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-17, -0.077, -0.75]}
      />
      <mesh
        geometry={nodes.Floor_Tiles_Baked.geometry}
        material={materials.Floor_Tiles_Baked}
        position={[-8.007, 0.01, -10.751]}
        scale={[1, 0.077, 1]}
      />
      <mesh
        geometry={nodes.Environment_CanFridge_Door_Environment_CanFridge_Door_Glass001.geometry}
        material={materials['Glass.002']}
        position={[-14.5, 2.945, -9.969]}
        rotation={[0, 1.571, 0]}
        scale={1.25}
      />
      <mesh
        geometry={nodes.Environment_CanFridge_Door_Environment_CanFridge_Door_Glass003.geometry}
        material={materials['Glass.002']}
        position={[-14.5, 2.945, -13.062]}
        rotation={[0, 1.571, 0]}
        scale={1.25}
      />
      <mesh
        geometry={nodes.Glasses001.geometry}
        material={materials.Glass}
        position={[-1.941, 2.472, -2.901]}
        rotation={[0, -0.066, 0]}
        scale={1.1}
      />
      <mesh
        geometry={nodes.group50311005_Baked.geometry}
        material={materials.group50311005_Baked}
        position={[-1.344, 3.107, -16.42]}
        rotation={[0, 0.37, 0]}
        scale={[0.5, 1, 0.5]}
      />
      <mesh
        geometry={nodes.Locker_mesh001_Baked.geometry}
        material={materials['Locker_mesh.001_Baked']}
        position={[-15.564, 0.1, -5.405]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={2.5}
      />
      <mesh
        geometry={nodes.Locker_mesh002_Baked.geometry}
        material={materials['Locker_mesh.002_Baked']}
        position={[-15.564, 0.1, -6.522]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={2.5}
      />
      <mesh
        geometry={nodes.Locker_mesh003_Baked.geometry}
        material={materials['Locker_mesh.003_Baked']}
        position={[-15.564, 0.1, -7.651]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={2.5}
      />
      <mesh
        geometry={nodes.lemonHalf_Baked.geometry}
        material={materials.lemonHalf_Baked}
        position={[-2.124, 2.554, -1.572]}
        rotation={[0.887, 0, 0]}
      />
      <mesh
        geometry={nodes.Message_Board_Baked.geometry}
        material={materials.Message_Board_Baked}
        position={[-4.935, 3.082, -16.888]}
        rotation={[0, -1.571, 0]}
        scale={0.025}
      />
      <mesh
        geometry={nodes.Papers_Baked.geometry}
        material={materials.Papers_Baked}
        position={[-5.507, 2.355, -15.565]}
        rotation={[0, 0.633, 0]}
        scale={4}
      />
      <mesh
        geometry={nodes.ModernKitchenStool1001_Baked.geometry}
        material={materials['ModernKitchenStool1.001_Baked']}
        position={[-12.163, -12.485, 15.079]}
        scale={3}
      />
      <mesh
        geometry={nodes.ModernKitchenStool1002_Baked.geometry}
        material={materials['ModernKitchenStool1.002_Baked']}
        position={[-12.163, -12.485, 12.422]}
        scale={3}
      />
      <mesh
        geometry={nodes.ModernKitchenStool1003_Baked.geometry}
        material={materials['ModernKitchenStool1.003_Baked']}
        position={[-12.163, -12.485, 9.764]}
        scale={3}
      />
      <mesh
        geometry={nodes.ModernKitchenStool1004_Baked.geometry}
        material={materials['ModernKitchenStool1.004_Baked']}
        position={[-12.163, -12.485, 7.219]}
        scale={3}
      />
      <mesh
        geometry={nodes.Kitchen_Sink_Baked.geometry}
        material={materials.Kitchen_Sink_Baked}
        position={[-6.001, 0.354, 0.524]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[100, 91.328, 133.34]}
      />
      <mesh
        geometry={nodes.ModernKitchenStool1005_Baked.geometry}
        material={materials['ModernKitchenStool1.005_Baked']}
        position={[8.121, -1.394, -8.518]}
        scale={2.97}
      />
      <mesh
        geometry={nodes.ModernKitchenStool1006_Baked.geometry}
        material={materials['ModernKitchenStool1.006_Baked']}
        position={[10.429, -1.394, -8.518]}
        scale={2.97}
      />
      <mesh
        geometry={nodes.ModernKitchenStool1007_Baked.geometry}
        material={materials['ModernKitchenStool1.007_Baked']}
        position={[12.846, -1.394, -8.518]}
        scale={2.97}
      />
      <mesh
        geometry={nodes.ModernKitchenStool1008_Baked.geometry}
        material={materials['ModernKitchenStool1.008_Baked']}
        position={[15.205, -1.394, -8.518]}
        scale={3}
      />
      <mesh
        geometry={nodes.misc_ice_tray_Cube019_Baked.geometry}
        material={materials['misc_ice_tray_Cube.019_Baked']}
        position={[-3.421, 2.523, 0.437]}
        rotation={[0, 0.603, 0]}
        scale={0.125}
      />
      <mesh
        geometry={nodes.lemon003_Baked.geometry}
        material={materials['lemon.003_Baked']}
        position={[-1.871, 2.567, -1.339]}
        rotation={[1.073, 0, 0]}
      />
      <mesh
        geometry={nodes.MainBuilding_low_Baked.geometry}
        material={materials.MainBuilding_low_Baked}
        position={[0.491, 0, -0.246]}
      />
      <mesh
        geometry={nodes.Mug_with_office_tools_Baked.geometry}
        material={materials['Mug with office tools_Baked']}
        position={[-3.757, -9.287, -15.303]}
        scale={3}
      />
      <mesh
        geometry={nodes.plant_01_Cube006_Baked.geometry}
        material={materials['plant_01_Cube.006_Baked']}
        position={[-2.888, 2.312, -16.58]}
        rotation={[0, -0.484, 0]}
        scale={0.005}
      />
      <mesh
        geometry={nodes.Pot_Plant_Baked.geometry}
        material={materials['Pot Plant_Baked']}
        position={[-0.984, 0.507, -16.339]}
        rotation={[-0.001, -0.007, -0.049]}
        scale={3}
      />
      <mesh
        geometry={nodes.Pot_Plant001_Baked.geometry}
        material={materials['Pot Plant.001_Baked']}
        position={[2.12, 1.633, -15.799]}
        scale={1.1}
      />
      <mesh
        geometry={nodes.Shelf_lower_Baked.geometry}
        material={materials['Shelf lower_Baked.001']}
        position={[-6.37, 4.096, -3.324]}
        rotation={[0, -1.571, 0]}
        scale={[1.25, 1, 3.25]}
      />
      <mesh
        geometry={nodes.Shelf_upper_Baked.geometry}
        material={materials['Shelf upper_Baked.001']}
        position={[-8.82, 5.502, -3.324]}
        rotation={[0, -1.571, 0]}
        scale={[1.25, 1, 3.25]}
      />
      <mesh
        geometry={nodes.StorageRack_2_mesh001_Baked.geometry}
        material={materials['StorageRack_2_mesh.001_Baked.001']}
        position={[-13.277, 0, -15.854]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={2.5}
      />
      <mesh
        geometry={nodes.StorageRack_1_mesh001_Baked.geometry}
        material={materials['StorageRack_1_mesh.001_Baked.001']}
        position={[-8.925, 0, -15.878]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.5}
      />
      <mesh
        geometry={nodes.Table_Baked.geometry}
        material={materials['Table_Baked.001']}
        position={[12.16, 1.112, 12.127]}
        scale={[0.15, 1.028, 0.15]}
      />
      <mesh
        geometry={nodes.Table001_Baked.geometry}
        material={materials['Table.001_Baked.001']}
        position={[12.16, 1.112, 3.817]}
        scale={[0.15, 1.028, 0.15]}
      />
      <mesh
        geometry={nodes.Table002_Baked.geometry}
        material={materials['Table.002_Baked.001']}
        position={[12.16, 1.112, -4.493]}
        scale={[0.15, 1.028, 0.15]}
      />
      <mesh
        geometry={nodes.Table003_Baked.geometry}
        material={materials['Table.003_Baked.001']}
        position={[12.16, 1.112, -12.887]}
        scale={[0.15, 1.028, 0.15]}
      />
      <mesh geometry={nodes.Windows_low001.geometry} material={materials['Glass.003']} position={[0.491, 0, -0.246]} />
    </group>
  );
};

useGLTF.preload(config.assets.barGLB);
