'use client';

import { DemoScene } from '$lib/pages/game-demo/components/DemoScene';
import { SceneLights } from '$lib/pages/game-demo/components/SceneLights';
import { ScenePostProcessing } from '$lib/pages/game-demo/components/ScenePostProcessing';

export const GameScreen = () => {
  return (
    <>
      <DemoScene />
      <SceneLights />
      <ScenePostProcessing />
    </>
  );
};
