import { useEffect } from 'react';

import { DayTimer } from '$lib/pages/sqliqour/components/DayTimer';
import { Events } from '$lib/pages/sqliqour/components/Events/Events';
import { GameOverPopup } from '$lib/pages/sqliqour/components/GameOverPopup';
import { NextDayPopup } from '$lib/pages/sqliqour/components/NextDayPopup';
import { Tutorial } from '$lib/pages/sqliqour/components/Tutorial';
import { useGameStore } from '$lib/pages/sqliqour/data/store/useGameStore';

export const GameLoop = () => {
  const { currentDay, startGameLoop } = useGameStore((s) => ({ currentDay: s.currentDay, startGameLoop: s.startGameLoop }));

  useEffect(() => {
    startGameLoop();
  }, []);

  return (
    <div>
      {currentDay === 1 && <Tutorial />}
      {currentDay !== 1 && (
        <>
          <Events />
          <GameOverPopup />
          <NextDayPopup />
          <DayTimer />
        </>
      )}
    </div>
  );
};
