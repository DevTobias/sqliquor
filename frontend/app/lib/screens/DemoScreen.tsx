'use client';

import { useRef } from 'react';
import { useHelper } from '@react-three/drei';
import { SpotLightHelper, PointLightHelper, SpotLight, PointLight } from 'three';

import { Box } from '$lib/components/Box';

export const DemoScreen = () => {
  const spotLightRef = useRef<SpotLight>(null!);
  const pointLightRef = useRef<PointLight>(null!);

  useHelper(spotLightRef, SpotLightHelper, 'red');
  useHelper(pointLightRef, PointLightHelper, 1, 'red');

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight ref={spotLightRef} position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight ref={pointLightRef} position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </>
  );
};
