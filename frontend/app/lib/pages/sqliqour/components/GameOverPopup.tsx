import Button from '$lib/components/Button';
import { Popup } from '$lib/components/Popup';
import { useGameStore } from '$lib/pages/sqliqour/data/store/useGameStore';
import { useTaskStore } from '$lib/pages/sqliqour/data/store/useTaskStore';

import styles from './GameOverPopup.module.scss';

export const GameOverPopup = () => {
  const { gameState, startGameLoop } = useGameStore((s) => ({ gameState: s.gameState, startGameLoop: s.startGameLoop }));

  const handleContinueClick = () => {
    useGameStore.getState().reset();
    useTaskStore.getState().reset();
    startGameLoop();
  };

  return (
    <Popup visible={gameState === 'finished'}>
      <div className={styles.popup}>
        <div className={styles.title}>
          <h1>Game Over!</h1>
          <Button onClick={handleContinueClick} fullwidth>
            Versuche es erneut!
          </Button>
        </div>
        <div>
          <p>
            Super, deine SQL Kenntnisse nehmen langsam Form an. Deine Bar musste jedoch leider trotzdem schließen, weil nicht alle
            Kund: innen rechtzeitig bedient wurden.
          </p>
          <p>
            Bleib dran und versuche es doch gleich nochmal, damit du nicht nur deinen Highscore schlagen kannst, sondern zum richtigen
            SQL Profi wirst.
          </p>
        </div>
      </div>
    </Popup>
  );
};
