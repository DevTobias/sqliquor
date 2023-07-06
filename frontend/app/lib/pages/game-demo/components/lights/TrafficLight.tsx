import { FC, useRef } from 'react';
import { PointLight } from 'three';

interface TrafficLightProps {
  position: [x: number, y: number, z: number];
}

export const TrafficLight: FC<TrafficLightProps> = ({ position }) => {
  const lightRef = useRef<PointLight>(null!);

  // const { showLightHelpers } = useControls({ showLightHelpers: false });
  // useHelper(showLightHelpers && lightRef, PointLightHelper, 1, 'yellow');

  return <pointLight ref={lightRef} distance={50} decay={2} color='#ff0000' position={position} />;
};
