'use client';

import { ReactNode, FC, useState, useEffect } from 'react';

interface Props {
  loading: boolean;
  fallback?: ReactNode;
  children?: ReactNode;
}

export const ClientSuspense: FC<Props> = ({ fallback, children, loading }) => {
  const [showingChildren, setShowingChildren] = useState(false);
  useEffect(() => setShowingChildren(true), []);

  if (showingChildren && !loading) return children;
  return fallback;
};
