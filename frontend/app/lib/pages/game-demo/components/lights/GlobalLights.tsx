import { useHelper } from '@react-three/drei';
import { DirectionalLightProps } from '@react-three/fiber';
import { useControls } from 'leva';
import { FC, useEffect, useRef } from 'react';
import { CameraHelper, DirectionalLight, DirectionalLightHelper, OrthographicCamera } from 'three';

interface GlobalLightProps extends DirectionalLightProps {
  position: [x: number, y: number, z: number];
}

export const GlobalLight: FC<GlobalLightProps> = ({ position, ...rest }) => {
  const light = useRef<DirectionalLight>(null!);

  const { showLightHelpers } = useControls({ showLightHelpers: false });
  useHelper(showLightHelpers && light, DirectionalLightHelper, 1, 'cyan');
  useEffect(() => light.current.target.updateMatrixWorld(), []);

  const shadowCamera = useRef<OrthographicCamera>(null!);
  useHelper(false && shadowCamera, CameraHelper);

  return (
    <directionalLight ref={light} position={position} target-position={[0, 0, 0]} shadow-bias={-0.001} shadow-mapSize={2048} {...rest}>
      <orthographicCamera ref={shadowCamera} attach={'shadow-camera'} args={[-100, 100, 100, -100, 0.5, 400]} />
    </directionalLight>
  );
};
