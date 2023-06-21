import { FC, ReactNode } from 'react';

import styles from './Switcher.module.scss';

interface Props {
  children?: ReactNode;
  onSwitch: VoidFunction;
}

export const Switcher: FC<Props> = ({ children, onSwitch }) => {
  return (
    <span className={styles.switcher} onClick={onSwitch}>
      {children}
    </span>
  );
};
