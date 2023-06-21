'use client';

import { ThreeScene } from '$lib/components/ThreeScene';
import { DemoScreen } from '$lib/pages/three-demo/DemoScreen';

export default function Home() {
  return (
    <ThreeScene>
      <DemoScreen />
    </ThreeScene>
  );
}
