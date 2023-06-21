'use client';

/* import assets */
import { DemoLevel } from '$lib/components/DemoLevel';
import { Lights } from '$lib/components/Lights';

/* This screen is used to implement anything that is physically in the world */

export const GameScreen = () => {
  return (
    <>
      <DemoLevel />
      <Lights />
    </>
  );
};
