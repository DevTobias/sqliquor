import { FC, ReactNode } from 'react';

interface ShowProps {
  /** The value to render children with (if when is truthy). */
  when: unknown;
  /** The element to render if when is falsy. */
  fallback?: ReactNode;
  /** The components child elements. */
  children: ReactNode[] | ReactNode;
}

/**
 * The `Show` control flow is used to conditional render components of a view: it renders `children` when the
 * `when` prop is truthy, an `fallback` otherwise. It is similar to the ternary operator
 * `(when ? children : fallback)` but is ideal for templating JSX.
 *
 * @param when      The condition to render children.
 * @param fallback  Gets rendered if when is falsy.
 */
export const Show: FC<ShowProps> = ({ children, when, fallback }) => {
  if (!when) return fallback ?? null;
  if (!Array.isArray(children)) return children;
  return <>{children.map((child) => child)}</>;
};
