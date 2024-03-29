import { useEffect, useRef } from 'react';

import { useIsomorphicLayoutEffect } from '$lib/hooks/useIsomorphicLayoutEffect';

export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback);

  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) return undefined;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
};
