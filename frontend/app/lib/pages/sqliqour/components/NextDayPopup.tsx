import Button from '$lib/components/Button';
import { Popup } from '$lib/components/Popup';
import { useGameStore } from '$lib/pages/sqliqour/data/store/useGameStore';

import styles from './NextDayPopup.module.scss';

export const NextDayPopup = () => {
  const { currentTimer, nextDayOrLevel } = useGameStore((s) => ({ currentTimer: s.currentTimer, nextDayOrLevel: s.nextDayOrLevel }));

  return (
    <Popup visible={currentTimer !== null && currentTimer <= 0}>
      <div className={styles.popup}>
        <h1>Super gemacht!</h1>
        <p>
          Du kannst jetzt erst einmal kurz entspannen, du hast den Tag erfolgreich überstanden und alle Kund: innen erfolgreich bedient
          und alle weiteren Probleme aus der Welt geschafft. Wenn du bereit bist, starte doch gleich den nächsten Tag!
        </p>
        <Button onClick={nextDayOrLevel}>Nächster Tag</Button>
      </div>
    </Popup>
  );
};
