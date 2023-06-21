'use client';

import { DemoScreen } from '$lib/screens/GameScreen';
import { ThreeScene } from '$lib/components/ThreeScene';

export default function Home() {
  return (
    <ThreeScene>
      <DemoScreen />
    </ThreeScene>
  );
}
