import { useGLTF } from '@react-three/drei';
import { GroupProps } from '@react-three/fiber';
import { FC } from 'react';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

import { config } from '$lib/config';

type GLTFResult = GLTF & {
  nodes: {
    Counter_Baked: THREE.Mesh;
    StorageRack_2_mesh001_Baked: THREE.Mesh;
    StorageRack_1_mesh001_Baked: THREE.Mesh;
    Box_1_mesh001_Baked: THREE.Mesh;
    Box_2_mesh001_Baked: THREE.Mesh;
    Locker_mesh001_Baked: THREE.Mesh;
    Crate_Baked: THREE.Mesh;
    Crate_2_Baked: THREE.Mesh;
    Box_1_mesh002_Baked: THREE.Mesh;
    Locker_mesh002_Baked: THREE.Mesh;
    Locker_mesh003_Baked: THREE.Mesh;
    lemonHalf_Baked: THREE.Mesh;
    barrel_Baked: THREE.Mesh;
    Chair_Baked: THREE.Mesh;
    Message_Board_Baked: THREE.Mesh;
    Analog_Cock_Baked: THREE.Mesh;
    Extinguisher_Mesh003_Baked: THREE.Mesh;
    Papers_Baked: THREE.Mesh;
    plant_01_Cube006_Baked: THREE.Mesh;
    Mug_with_office_tools_Baked: THREE.Mesh;
    Calender_01_Plane003_Baked: THREE.Mesh;
    group50311005_Baked: THREE.Mesh;
    Pot_Plant_Baked: THREE.Mesh;
    Pot_Plant001_Baked: THREE.Mesh;
    Environment_CanFridge_Baked: THREE.Mesh;
    Environment_CanFridge001_Baked: THREE.Mesh;
    barrel001_Baked: THREE.Mesh;
    barrel002_Baked: THREE.Mesh;
    ModernKitchenStool1001_Baked: THREE.Mesh;
    ModernKitchenStool1002_Baked: THREE.Mesh;
    ModernKitchenStool1003_Baked: THREE.Mesh;
    ModernKitchenStool1004_Baked: THREE.Mesh;
    Shelf_lower_Baked: THREE.Mesh;
    Shelf_upper_Baked: THREE.Mesh;
    Kitchen_Sink_Baked: THREE.Mesh;
    ModernKitchenStool1005_Baked: THREE.Mesh;
    ModernKitchenStool1006_Baked: THREE.Mesh;
    ModernKitchenStool1007_Baked: THREE.Mesh;
    ModernKitchenStool1008_Baked: THREE.Mesh;
    cookingKnife_Baked: THREE.Mesh;
    lemon003_Baked: THREE.Mesh;
    Cube010_Baked: THREE.Mesh;
    Cube011_Baked: THREE.Mesh;
    Cube012_Baked: THREE.Mesh;
    Cube013_Baked: THREE.Mesh;
    Cube014_Baked: THREE.Mesh;
    Cube015_Baked: THREE.Mesh;
    Cube016_Baked: THREE.Mesh;
    Cube017_Baked: THREE.Mesh;
    Table_Baked: THREE.Mesh;
    Table001_Baked: THREE.Mesh;
    Table002_Baked: THREE.Mesh;
    Table003_Baked: THREE.Mesh;
    Desk_Baked: THREE.Mesh;
    Cube021_Baked: THREE.Mesh;
    Floor_Ground_Baked: THREE.Mesh;
    Floor_Wood_Baked: THREE.Mesh;
    Floor_Tiles_Baked: THREE.Mesh;
    MainBuilding_Baked: THREE.Mesh;
    Bottle_Collection_lower_Baked: THREE.Mesh;
    Bottle_Collection_upper_Baked: THREE.Mesh;
    Environment_CanFridge_Door_Environment_CanFridge_Door_Glass003: THREE.Mesh;
    Environment_CanFridge_Door_Environment_CanFridge_Door_Glass004: THREE.Mesh;
    Environment_CanFridge_Door_Environment_CanFridge_Door_Atlas003: THREE.Mesh;
    Environment_CanFridge_Door_Environment_CanFridge_Door_Atlas002: THREE.Mesh;
    misc_ice_tray_Cube019_Baked: THREE.Mesh;
    board_cutting_board001_Cube117_Baked: THREE.Mesh;
    Glasses: THREE.Mesh;
  };
  materials: {
    Counter_Baked: THREE.MeshStandardMaterial;
    ['StorageRack_2_mesh.001_Baked.004']: THREE.MeshStandardMaterial;
    ['StorageRack_1_mesh.001_Baked.004']: THREE.MeshStandardMaterial;
    ['Box_1_mesh.001_Baked']: THREE.MeshStandardMaterial;
    ['Box_2_mesh.001_Baked']: THREE.MeshStandardMaterial;
    ['Locker_mesh.001_Baked']: THREE.MeshStandardMaterial;
    Crate_Baked: THREE.MeshStandardMaterial;
    ['Crate 2_Baked']: THREE.MeshStandardMaterial;
    ['Box_1_mesh.002_Baked']: THREE.MeshStandardMaterial;
    ['Locker_mesh.002_Baked']: THREE.MeshStandardMaterial;
    ['Locker_mesh.003_Baked']: THREE.MeshStandardMaterial;
    lemonHalf_Baked: THREE.MeshStandardMaterial;
    barrel_Baked: THREE.MeshStandardMaterial;
    Chair_Baked: THREE.MeshStandardMaterial;
    Message_Board_Baked: THREE.MeshStandardMaterial;
    Analog_Cock_Baked: THREE.MeshStandardMaterial;
    ['Extinguisher_Mesh.003_Baked']: THREE.MeshStandardMaterial;
    Papers_Baked: THREE.MeshStandardMaterial;
    ['plant_01_Cube.006_Baked']: THREE.MeshStandardMaterial;
    ['Mug with office tools_Baked']: THREE.MeshStandardMaterial;
    ['Calender_01_Plane.003_Baked']: THREE.MeshStandardMaterial;
    group50311005_Baked: THREE.MeshStandardMaterial;
    ['Pot Plant_Baked']: THREE.MeshStandardMaterial;
    ['Pot Plant.001_Baked']: THREE.MeshStandardMaterial;
    Environment_CanFridge_Baked: THREE.MeshStandardMaterial;
    ['Environment_CanFridge.001_Baked']: THREE.MeshStandardMaterial;
    ['barrel.001_Baked']: THREE.MeshStandardMaterial;
    ['barrel.002_Baked']: THREE.MeshStandardMaterial;
    ['ModernKitchenStool1.001_Baked']: THREE.MeshStandardMaterial;
    ['ModernKitchenStool1.002_Baked']: THREE.MeshStandardMaterial;
    ['ModernKitchenStool1.003_Baked']: THREE.MeshStandardMaterial;
    ['ModernKitchenStool1.004_Baked']: THREE.MeshStandardMaterial;
    ['Shelf lower_Baked.004']: THREE.MeshStandardMaterial;
    ['Shelf upper_Baked.004']: THREE.MeshStandardMaterial;
    Kitchen_Sink_Baked: THREE.MeshStandardMaterial;
    ['ModernKitchenStool1.005_Baked']: THREE.MeshStandardMaterial;
    ['ModernKitchenStool1.006_Baked']: THREE.MeshStandardMaterial;
    ['ModernKitchenStool1.007_Baked']: THREE.MeshStandardMaterial;
    ['ModernKitchenStool1.008_Baked']: THREE.MeshStandardMaterial;
    cookingKnife_Baked: THREE.MeshStandardMaterial;
    ['lemon.003_Baked']: THREE.MeshStandardMaterial;
    ['Cube.010_Baked']: THREE.MeshStandardMaterial;
    ['Cube.011_Baked']: THREE.MeshStandardMaterial;
    ['Cube.012_Baked']: THREE.MeshStandardMaterial;
    ['Cube.013_Baked']: THREE.MeshStandardMaterial;
    ['Cube.014_Baked']: THREE.MeshStandardMaterial;
    ['Cube.015_Baked']: THREE.MeshStandardMaterial;
    ['Cube.016_Baked']: THREE.MeshStandardMaterial;
    ['Cube.017_Baked']: THREE.MeshStandardMaterial;
    ['Table_Baked.004']: THREE.MeshStandardMaterial;
    ['Table.001_Baked.004']: THREE.MeshStandardMaterial;
    ['Table.002_Baked.004']: THREE.MeshStandardMaterial;
    ['Table.003_Baked.004']: THREE.MeshStandardMaterial;
    Desk_Baked: THREE.MeshStandardMaterial;
    ['Cube.021_Baked']: THREE.MeshStandardMaterial;
    Floor_Ground_Baked: THREE.MeshStandardMaterial;
    Floor_Wood_Baked: THREE.MeshStandardMaterial;
    Floor_Tiles_Baked: THREE.MeshStandardMaterial;
    MainBuilding_Baked: THREE.MeshStandardMaterial;
    ['Bottle Collection lower_Baked']: THREE.MeshStandardMaterial;
    ['Bottle Collection upper_Baked']: THREE.MeshStandardMaterial;
    Glass: THREE.MeshPhysicalMaterial;
    ['Environment_CanFridge_Door_Environment_CanFridge_Door_Atlas.003']: THREE.MeshStandardMaterial;
    ['Environment_CanFridge_Door_Environment_CanFridge_Door_Atlas.002']: THREE.MeshStandardMaterial;
    ['misc_ice_tray_Cube.019_Baked']: THREE.MeshStandardMaterial;
    ['board_cutting_board.001_Cube.117_Baked']: THREE.MeshStandardMaterial;
    ['[Translucent_Glass_Gray]']: THREE.MeshPhysicalMaterial;
  };
};

export const MainBuilding: FC<GroupProps> = (props) => {
  const { nodes, materials } = useGLTF(config.assets.mainBuildingGLB) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Counter_Baked.geometry} material={materials.Counter_Baked} />
      <mesh geometry={nodes.StorageRack_2_mesh001_Baked.geometry} material={materials['StorageRack_2_mesh.001_Baked.004']} />
      <mesh geometry={nodes.StorageRack_1_mesh001_Baked.geometry} material={materials['StorageRack_1_mesh.001_Baked.004']} />
      <mesh
        geometry={nodes.Box_1_mesh001_Baked.geometry}
        material={materials['Box_1_mesh.001_Baked']}
        position={[-14.355, 5.188, -15.83]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.5}
      />
      <mesh
        geometry={nodes.Box_2_mesh001_Baked.geometry}
        material={materials['Box_2_mesh.001_Baked']}
        position={[-15.575, 5.447, -15.604]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.5}
      />
      <mesh geometry={nodes.Locker_mesh001_Baked.geometry} material={materials['Locker_mesh.001_Baked']} />
      <mesh
        geometry={nodes.Crate_Baked.geometry}
        material={materials.Crate_Baked}
        position={[-15.44, 0.676, -15.3]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={2}
      />
      <mesh geometry={nodes.Crate_2_Baked.geometry} material={materials['Crate 2_Baked']} />
      <mesh
        geometry={nodes.Box_1_mesh002_Baked.geometry}
        material={materials['Box_1_mesh.002_Baked']}
        position={[-15.733, 3.651, -15.956]}
        rotation={[Math.PI / 2, 0, -2.011]}
        scale={2.5}
      />
      <mesh geometry={nodes.Locker_mesh002_Baked.geometry} material={materials['Locker_mesh.002_Baked']} />
      <mesh geometry={nodes.Locker_mesh003_Baked.geometry} material={materials['Locker_mesh.003_Baked']} />
      <mesh geometry={nodes.lemonHalf_Baked.geometry} material={materials.lemonHalf_Baked} />
      <mesh geometry={nodes.barrel_Baked.geometry} material={materials.barrel_Baked} />
      <mesh geometry={nodes.Chair_Baked.geometry} material={materials.Chair_Baked} />
      <mesh geometry={nodes.Message_Board_Baked.geometry} material={materials.Message_Board_Baked} />
      <mesh geometry={nodes.Analog_Cock_Baked.geometry} material={materials.Analog_Cock_Baked} />
      <mesh geometry={nodes.Extinguisher_Mesh003_Baked.geometry} material={materials['Extinguisher_Mesh.003_Baked']} />
      <mesh geometry={nodes.Papers_Baked.geometry} material={materials.Papers_Baked} />
      <mesh geometry={nodes.plant_01_Cube006_Baked.geometry} material={materials['plant_01_Cube.006_Baked']} />
      <mesh geometry={nodes.Mug_with_office_tools_Baked.geometry} material={materials['Mug with office tools_Baked']} />
      <mesh geometry={nodes.Calender_01_Plane003_Baked.geometry} material={materials['Calender_01_Plane.003_Baked']} />
      <mesh geometry={nodes.group50311005_Baked.geometry} material={materials.group50311005_Baked} />
      <mesh geometry={nodes.Pot_Plant_Baked.geometry} material={materials['Pot Plant_Baked']} />
      <mesh geometry={nodes.Pot_Plant001_Baked.geometry} material={materials['Pot Plant.001_Baked']} />
      <mesh geometry={nodes.Environment_CanFridge_Baked.geometry} material={materials.Environment_CanFridge_Baked} />
      <mesh geometry={nodes.Environment_CanFridge001_Baked.geometry} material={materials['Environment_CanFridge.001_Baked']} />
      <mesh
        geometry={nodes.barrel001_Baked.geometry}
        material={materials['barrel.001_Baked']}
        position={[-13.447, 3.224, -15.232]}
        rotation={[0, 1.571, 0]}
        scale={2}
      />
      <mesh
        geometry={nodes.barrel002_Baked.geometry}
        material={materials['barrel.002_Baked']}
        position={[-12.063, 3.224, -15.232]}
        rotation={[-Math.PI, 1.542, -Math.PI]}
        scale={2}
      />
      <mesh
        geometry={nodes.ModernKitchenStool1001_Baked.geometry}
        material={materials['ModernKitchenStool1.001_Baked']}
        position={[-12.654, -12.485, 15.325]}
        scale={3}
      />
      <mesh geometry={nodes.ModernKitchenStool1002_Baked.geometry} material={materials['ModernKitchenStool1.002_Baked']} />
      <mesh geometry={nodes.ModernKitchenStool1003_Baked.geometry} material={materials['ModernKitchenStool1.003_Baked']} />
      <mesh geometry={nodes.ModernKitchenStool1004_Baked.geometry} material={materials['ModernKitchenStool1.004_Baked']} />
      <mesh geometry={nodes.Shelf_lower_Baked.geometry} material={materials['Shelf lower_Baked.004']} />
      <mesh geometry={nodes.Shelf_upper_Baked.geometry} material={materials['Shelf upper_Baked.004']} />
      <mesh geometry={nodes.Kitchen_Sink_Baked.geometry} material={materials.Kitchen_Sink_Baked} />
      <mesh geometry={nodes.ModernKitchenStool1005_Baked.geometry} material={materials['ModernKitchenStool1.005_Baked']} />
      <mesh geometry={nodes.ModernKitchenStool1006_Baked.geometry} material={materials['ModernKitchenStool1.006_Baked']} />
      <mesh geometry={nodes.ModernKitchenStool1007_Baked.geometry} material={materials['ModernKitchenStool1.007_Baked']} />
      <mesh geometry={nodes.ModernKitchenStool1008_Baked.geometry} material={materials['ModernKitchenStool1.008_Baked']} />
      <mesh geometry={nodes.cookingKnife_Baked.geometry} material={materials.cookingKnife_Baked} />
      <mesh geometry={nodes.lemon003_Baked.geometry} material={materials['lemon.003_Baked']} />
      <mesh geometry={nodes.Cube010_Baked.geometry} material={materials['Cube.010_Baked']} />
      <mesh geometry={nodes.Cube011_Baked.geometry} material={materials['Cube.011_Baked']} />
      <mesh geometry={nodes.Cube012_Baked.geometry} material={materials['Cube.012_Baked']} />
      <mesh geometry={nodes.Cube013_Baked.geometry} material={materials['Cube.013_Baked']} />
      <mesh geometry={nodes.Cube014_Baked.geometry} material={materials['Cube.014_Baked']} />
      <mesh geometry={nodes.Cube015_Baked.geometry} material={materials['Cube.015_Baked']} />
      <mesh geometry={nodes.Cube016_Baked.geometry} material={materials['Cube.016_Baked']} />
      <mesh geometry={nodes.Cube017_Baked.geometry} material={materials['Cube.017_Baked']} />
      <mesh geometry={nodes.Table_Baked.geometry} material={materials['Table_Baked.004']} />
      <mesh geometry={nodes.Table001_Baked.geometry} material={materials['Table.001_Baked.004']} />
      <mesh geometry={nodes.Table002_Baked.geometry} material={materials['Table.002_Baked.004']} />
      <mesh geometry={nodes.Table003_Baked.geometry} material={materials['Table.003_Baked.004']} />
      <mesh geometry={nodes.Desk_Baked.geometry} material={materials.Desk_Baked} />
      <mesh geometry={nodes.Cube021_Baked.geometry} material={materials['Cube.021_Baked']} />
      <mesh geometry={nodes.Floor_Ground_Baked.geometry} material={materials.Floor_Ground_Baked} />
      <mesh geometry={nodes.Floor_Wood_Baked.geometry} material={materials.Floor_Wood_Baked} />
      <mesh geometry={nodes.Floor_Tiles_Baked.geometry} material={materials.Floor_Tiles_Baked} />
      <mesh geometry={nodes.MainBuilding_Baked.geometry} material={materials.MainBuilding_Baked} />
      <mesh
        geometry={nodes.Bottle_Collection_lower_Baked.geometry}
        material={materials['Bottle Collection lower_Baked']}
        position={[-10.005, 4.401, -3.508]}
        scale={1.2}
      />
      <mesh
        geometry={nodes.Bottle_Collection_upper_Baked.geometry}
        material={materials['Bottle Collection upper_Baked']}
        position={[-12.288, 5.806, -3.032]}
        scale={1.2}
      />
      <mesh
        geometry={nodes.Environment_CanFridge_Door_Environment_CanFridge_Door_Glass003.geometry}
        material={materials.Glass}
        position={[-15.102, 2.878, -12.879]}
        rotation={[0, 1.571, 0]}
        scale={1.25}
      />
      <mesh
        geometry={nodes.Environment_CanFridge_Door_Environment_CanFridge_Door_Glass004.geometry}
        material={materials.Glass}
        position={[-15.102, 2.878, -9.786]}
        rotation={[0, 1.571, 0]}
        scale={1.25}
      />
      <mesh
        geometry={nodes.Environment_CanFridge_Door_Environment_CanFridge_Door_Atlas003.geometry}
        material={materials['Environment_CanFridge_Door_Environment_CanFridge_Door_Atlas.003']}
      />
      <mesh
        geometry={nodes.Environment_CanFridge_Door_Environment_CanFridge_Door_Atlas002.geometry}
        material={materials['Environment_CanFridge_Door_Environment_CanFridge_Door_Atlas.002']}
      />
      <mesh
        geometry={nodes.misc_ice_tray_Cube019_Baked.geometry}
        material={materials['misc_ice_tray_Cube.019_Baked']}
        position={[-3.913, 2.523, 0.683]}
        rotation={[0, 0.603, 0]}
        scale={0.125}
      />
      <mesh
        geometry={nodes.board_cutting_board001_Cube117_Baked.geometry}
        material={materials['board_cutting_board.001_Cube.117_Baked']}
        position={[-2.523, 2.503, -1.076]}
        rotation={[-Math.PI, 0.713, -Math.PI]}
        scale={0.15}
      />
      <mesh
        geometry={nodes.Glasses.geometry}
        material={materials['[Translucent_Glass_Gray]']}
        position={[-2.433, 2.472, -2.655]}
        rotation={[0, -0.066, 0]}
        scale={1.1}
      />
    </group>
  );
};

useGLTF.preload(config.assets.mainBuildingGLB);
