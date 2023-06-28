'use client';

import { DemoScene } from '$lib/pages/game-demo/components/DemoScene';
import { MainBuilding } from '$lib/pages/game-demo/components/Mainbuilding';
import { Counter } from '$lib/pages/game-demo/components/Counter';
import { Computer } from '$lib/pages/game-demo/components/Computer';
import { Player } from '$lib/pages/game-demo/components/Player';
import { SceneLights } from '$lib/pages/game-demo/components/SceneLights';
import { ScenePostProcessing } from '$lib/pages/game-demo/components/ScenePostProcessing';

export const GameScreen = () => {
  return (
    <>
      <DemoScene />
      <MainBuilding />
      <Counter />
      <Computer />
      <Player />
      <SceneLights />
      <ScenePostProcessing />
    </>
  );
};
