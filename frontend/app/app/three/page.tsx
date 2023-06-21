'use client';

import { ThreeScene } from '$lib/components/ThreeScene';
import { GameScreen } from '$lib/pages/three-demo/GameScreen';

export default function Home() {
  return (
    <ThreeScene>
      <GameScreen />
    </ThreeScene>
  );
}
