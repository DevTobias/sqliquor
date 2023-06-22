'use client';

import { DemoScene } from '$lib/pages/game-demo/components/DemoScene';
import { SceneLights } from '$lib/pages/game-demo/components/SceneLights';

export const GameScreen = () => {
  return (
    <>
      <DemoScene />
      <SceneLights />
    </>
  );
};
