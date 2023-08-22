'use client';

import { ThreeScene } from '$lib/components/features/three/ThreeScene';
import { GameScreen } from '$lib/pages/game-demo/GameScreen';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <ThreeScene>
        <GameScreen />
      </ThreeScene>
    </div>
  );
}
