import { useEffect } from 'react';

import { Events } from '$lib/pages/sqliqour/components/Events/Events';
import { useGameStore } from '$lib/pages/sqliqour/data/store/useGameStore';

export const GameLoop = () => {
  const { levels, startGameLoop } = useGameStore((s) => ({ levels: s.levels, startGameLoop: s.startGameLoop }));

  useEffect(() => {
    startGameLoop();
  }, []);

  return (
    <div>
      {levels[0].title}
      <Events />
    </div>
  );
};
