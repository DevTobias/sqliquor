'use client';

import { Bar } from '$lib/pages/game-demo/components/Bar';
import { Environment } from '$lib/pages/game-demo/components/Environment';
import { SampleCharacters } from '$lib/pages/game-demo/components/SampleCharacters';
import { SceneLights } from '$lib/pages/game-demo/components/SceneLights';
import { ScenePostProcessing } from '$lib/pages/game-demo/components/ScenePostProcessing';

export const GameScreen = () => {
  return (
    <>
      <Bar receiveShadow />
      <Environment receiveShadow />
      <SampleCharacters castShadow receiveShadow />
      <SceneLights />
      <ScenePostProcessing />
    </>
  );
};
