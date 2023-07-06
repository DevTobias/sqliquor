/* eslint-disable react-hooks/exhaustive-deps */

import { DependencyList, RefObject, useEffect } from 'react';

export const useScrollTo = (
  ref: RefObject<HTMLElement | null>,
  deps: DependencyList = [],
  options: ScrollIntoViewOptions = { behavior: 'smooth' }
) => {
  useEffect(() => ref.current?.scrollIntoView(options), [options, ref, ...deps]);
};
