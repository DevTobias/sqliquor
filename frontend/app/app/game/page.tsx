'use client';

import { CodeChat } from '$lib/components/CodeChat/CodeChat';
import { CodeChatProvider } from '$lib/components/CodeChat/store/client/useStore';
import { ThreeScene } from '$lib/components/features/three/ThreeScene';
import { GameScreen } from '$lib/pages/game-demo/GameScreen';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <ThreeScene>
        <GameScreen />
      </ThreeScene>
      <div className={styles.chatWrapper}>
        <CodeChatProvider>
          <CodeChat className={styles.chat} />
        </CodeChatProvider>
      </div>
    </div>
  );
}
