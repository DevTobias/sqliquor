'use client';

import { DemoScreen } from '$lib/screens/DemoScreen';
import { ThreeScene } from '$lib/components/ThreeScene';

export default function Home() {
  return (
    <ThreeScene>
      <DemoScreen />
    </ThreeScene>
  );
}
