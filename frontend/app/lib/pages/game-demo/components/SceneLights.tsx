'use client';

import { BarLight } from '$lib/pages/game-demo/components/lights/BarLight';
import { GlobalLight } from '$lib/pages/game-demo/components/lights/GlobalLights';

export const SceneLights = () => {
  return (
    <>
      <GlobalLight position={[200, 150, 200]} rotation={[-0.565, 0.645, 0.292]} intensity={1.5} color={'#5e5aac'} />
      <BarLight position={[0, 50, 0]} />
    </>
  );
};
