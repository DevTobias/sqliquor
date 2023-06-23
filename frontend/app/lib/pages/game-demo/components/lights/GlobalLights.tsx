import { DirectionalLightProps } from '@react-three/fiber';
import { FC, useEffect, useRef } from 'react';
import { DirectionalLight } from 'three';

interface GlobalLightProps extends DirectionalLightProps {
  position: [x: number, y: number, z: number];
}

export const GlobalLight: FC<GlobalLightProps> = ({ position, ...rest }) => {
  const light = useRef<DirectionalLight>(null!);

  // const { showLightHelpers } = useControls({ showLightHelpers: false });
  // useHelper(showLightHelpers && light, DirectionalLightHelper, 1, 'cyan');

  useEffect(() => light.current.target.updateMatrixWorld(), []);

  return <directionalLight ref={light} position={position} target-position={[-position[0], 0, -position[2]]} {...rest} />;
};
