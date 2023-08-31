'use client';

import { BarLight } from '$lib/pages/game-demo/components/lights/BarLight';
import { GlobalLight } from '$lib/pages/game-demo/components/lights/GlobalLights';
import { StreetLamp } from '$lib/pages/game-demo/components/lights/StreetLamp';
import { TrafficLight } from '$lib/pages/game-demo/components/lights/TrafficLight';

export const SceneLights = () => {
  return (
    <>
      <GlobalLight position={[200, 150, 200]} rotation={[-0.565, 0.645, 0.292]} intensity={1.5} color={'#5e5aac'} />

      <GlobalLight position={[-200, 150, -200]} rotation={[-0.565, 0.645, 0.292]} intensity={0.5} color={'#691d3f'} />

      <StreetLamp position={[-27.162, 15.301, 0.474]} />
      <StreetLamp position={[-51.566, 15.301, -34.464]} />
      <StreetLamp position={[-72.537, 15.301, -32.856]} />
      <StreetLamp position={[-0.91, 15.301, -26.281]} />
      <StreetLamp position={[71.541, 15.301, -26.349]} />
      <StreetLamp position={[35.187, 15.301, -34.265]} />
      <StreetLamp position={[-25.069, 15.301, -43.305]} />
      <StreetLamp position={[-33.832, 15.301, -60.669]} />
      <StreetLamp position={[-25.482, 15.301, -77.405]} />
      <StreetLamp position={[-32.618, 15.301, -105.058]} />
      <StreetLamp position={[-60.453, 15.301, 22.663]} />
      <StreetLamp position={[-33.772, 15.301, 60.431]} />
      <StreetLamp position={[59.427, 15.301, 33.712]} />
      <StreetLamp position={[37.339, 15.301, 0.402]} />
      <StreetLamp position={[0.996, 15.301, 36.531]} />

      <TrafficLight position={[-27.886, 10.142, -42.871]} />
      <TrafficLight position={[-23.059, 10.142, -42.871]} />

      <BarLight position={[-9.41425, 12.3863, -1.80856]} />
      <BarLight position={[-0.47566, 12.3863, -1.80856]} />
      <BarLight position={[8.59717, 12.3863, -1.80856]} />
      <BarLight position={[-9.41425, 12.3863, -11.4612]} />
      <BarLight position={[-0.47566, 12.3863, -11.4612]} />
      <BarLight position={[8.59717, 12.3863, -11.4612]} />
      <BarLight position={[8.59717, 12.3863, 9.52931]} />
    </>
  );
};
