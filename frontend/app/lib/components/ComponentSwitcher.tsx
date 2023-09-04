import { FC, ReactNode } from 'react';

import { classNames } from '$lib/utils/classNames';

import styles from './ComponentSwitcher.module.scss';

interface Props {
  className?: string;
  children: ReactNode;
}

export const ComponentSwitcher: FC<Props> = ({ className, children }) => {
  return <div className={classNames(styles.switcher, className)}>{children}</div>;
};
