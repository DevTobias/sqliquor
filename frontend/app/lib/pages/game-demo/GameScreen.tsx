'use client';

import { DemoScene } from '$lib/pages/game-demo/components/DemoScene';
import { MainBuilding } from '$lib/pages/game-demo/components/Mainbuilding';
import { Player } from '$lib/pages/game-demo/components/Player';
import { SceneLights } from '$lib/pages/game-demo/components/SceneLights';
import { ScenePostProcessing } from '$lib/pages/game-demo/components/ScenePostProcessing';

//      <DemoScene />
//      <Player />

export const GameScreen = () => {
  return (
    <>
      <MainBuilding />
      <SceneLights />
      <ScenePostProcessing />
    </>
  );
};
