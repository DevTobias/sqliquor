import { DependencyList, RefObject, useEffect } from 'react';

export const useScrollTo = (
  ref: RefObject<HTMLElement | null>,
  deps: DependencyList = [],
  active: boolean = true,
  options: ScrollIntoViewOptions = { behavior: 'smooth' }
) => {
  useEffect(() => {
    if (active) return ref.current?.scrollIntoView(options);
    return () => {};
  }, [options, active, ...deps]);
};
