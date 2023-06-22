'use client';

import { ThreeScene } from '$lib/components/ThreeScene/ThreeScene';
import { GameScreen } from '$lib/pages/game-demo/GameScreen';

export default function Home() {
  return (
    <ThreeScene>
      <GameScreen />
    </ThreeScene>
  );
}
