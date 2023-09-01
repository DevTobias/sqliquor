import { SpotLightProps } from '@react-three/fiber';
import { FC, useEffect, useRef } from 'react';
import { SpotLight } from 'three';

interface BarLightProps extends SpotLightProps {
  position: [x: number, y: number, z: number];
}

export const BarLight: FC<BarLightProps> = ({ position, ...rest }) => {
  const light = useRef<SpotLight>(null!);

  // const { showLightHelpers } = useControls({ showLightHelpers: false });
  // useHelper(showLightHelpers && light, SpotLightHelper, 'red');

  useEffect(() => light.current.target.updateMatrixWorld(), []);

  return (
    <spotLight
      ref={light}
      position={position}
      target-position={[position[0], 0, position[2]]}
      color={'#FFE2C4'}
      penumbra={0.75}
      angle={1}
      intensity={0.75}
      {...rest}
    />
  );
};
