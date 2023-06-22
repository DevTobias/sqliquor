import { useHelper } from '@react-three/drei';
import { useControls } from 'leva';
import { FC, useEffect, useRef } from 'react';
import { SpotLight, SpotLightHelper } from 'three';

interface StreetLampProps {
  position: [x: number, y: number, z: number];
}

export const StreetLamp: FC<StreetLampProps> = ({ position }) => {
  const light = useRef<SpotLight>(null!);

  const { showLightHelpers } = useControls({ showLightHelpers: false });
  useHelper(showLightHelpers && light, SpotLightHelper, 'red');
  useEffect(() => light.current.target.updateMatrixWorld(), []);

  return (
    <spotLight
      ref={light}
      position={position}
      target-position={[position[0], 0, position[2]]}
      color={'#ffc18b'}
      penumbra={0.75}
      angle={1}
    />
  );
};
