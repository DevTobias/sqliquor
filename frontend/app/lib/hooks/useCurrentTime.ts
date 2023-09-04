import { useState } from 'react';

import { useInterval } from '$lib/hooks/useInterval';

export const useCurrentTimestamp = (enabled = true) => {
  const [timestamp, setTimestamp] = useState(Math.ceil(new Date().getTime() / 1000));

  useInterval(() => {
    if (enabled) setTimestamp((ms) => ms + 1);
  }, 1000);

  return timestamp;
};
