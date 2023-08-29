import { FC, ReactNode, HTMLAttributes } from 'react';

import { useTaskStore } from '$lib/pages/sqliqour/data/store/useTaskStore';
import { classNames } from '$lib/utils/classNames';

import styles from './TaskWrapper.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const TaskWrapper: FC<Props> = ({ children, className, ...rest }) => {
  const { open } = useTaskStore((s) => ({ open: s.open }));
  return (
    <div className={classNames(className, styles.container, !open && styles.closed)} {...rest}>
      <div className={styles.task}>{children}</div>
    </div>
  );
};
