'use client';

import { ThreeScene } from '$lib/components/features/three/ThreeScene';
import { GameScreen } from '$lib/pages/game-demo/GameScreen';

export default function Game() {
  return (
    <ThreeScene>
      <GameScreen />
    </ThreeScene>
  );
}
