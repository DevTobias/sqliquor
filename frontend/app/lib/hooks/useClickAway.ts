import { RefObject, useEffect, useRef } from 'react';

export const useClickAway = (
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: Event) => void,
  events: (keyof DocumentEventMap)[] = ['mousedown', 'touchstart']
) => {
  const savedCallback = useRef(onClickAway);

  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    const handler = (event: Event) => {
      const { current: el } = ref;

      if (el && !el.contains(event.target as Node)) {
        savedCallback.current(event);
      }
    };

    events.forEach((name) => document.addEventListener(name, handler));
    return () => events.forEach((name) => document.removeEventListener(name, handler));
  }, [events, ref]);
};
