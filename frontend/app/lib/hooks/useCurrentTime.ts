import { useState } from 'react';

import { useInterval } from '$lib/hooks/useInterval';

const currentTimestamp = () => Math.ceil(new Date().getTime() / 1000);

export const useCurrentTimestamp = () => {
  const [timestamp, setTimestamp] = useState(currentTimestamp());
  useInterval(() => setTimestamp(currentTimestamp()), 1000);
  return timestamp;
};
