import { useHelper } from '@react-three/drei';
import { SpotLightProps } from '@react-three/fiber';
import { useControls } from 'leva';
import { FC, useEffect, useRef } from 'react';
import { SpotLight, SpotLightHelper } from 'three';

interface GlobalLightProps extends SpotLightProps {
  position: [x: number, y: number, z: number];
}

export const GlobalLight: FC<GlobalLightProps> = ({ position, ...rest }) => {
  const light = useRef<SpotLight>(null!);

  const { showLightHelpers } = useControls({ showLightHelpers: false });
  useHelper(showLightHelpers && light, SpotLightHelper, 'cyan');
  useEffect(() => light.current.target.updateMatrixWorld(), []);

  return (
    <spotLight
      ref={light}
      position={position}
      target-position={[-position[0], 0, -position[2]]}
      shadow-mapSize={2048}
      shadow-bias={-0.000006}
      angle={Math.PI / 4}
      {...rest}
    />
  );
};
