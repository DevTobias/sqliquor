import { SpotLightProps } from '@react-three/fiber';
import { FC, useEffect, useRef } from 'react';
import { SpotLight } from 'three';

interface StreetLampProps extends SpotLightProps {
  position: [x: number, y: number, z: number];
}

export const StreetLamp: FC<StreetLampProps> = ({ position, ...rest }) => {
  const light = useRef<SpotLight>(null!);

  // const { showLightHelpers } = useControls({ showLightHelpers: false });
  // useHelper(showLightHelpers && light, SpotLightHelper, 'red');

  useEffect(() => light.current.target.updateMatrixWorld(), []);

  return (
    <spotLight
      ref={light}
      position={position}
      target-position={[position[0], 0, position[2]]}
      color={'#ffc18b'}
      penumbra={0.75}
      angle={1}
      {...rest}
    />
  );
};
