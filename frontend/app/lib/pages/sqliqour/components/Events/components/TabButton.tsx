import { FC, ReactNode } from 'react';

import { classNames } from '$lib/utils/classNames';

import styles from './TabButton.module.scss';

interface Props {
  children: ReactNode;
  visible?: boolean;
  className?: string;
}

export const TabButton: FC<Props> = ({ children, visible = true, className = '' }) => {
  return <div className={classNames(styles.btn, !visible && styles.hidden, className)}>{children}</div>;
};
