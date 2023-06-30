import { FC, PropsWithChildren } from 'react';

import { classNames } from '$lib/utils/classNames';

import styles from './GenericMessage.module.scss';

interface Props {
  className?: string;
  position: 'left' | 'right';
}

export const GenericMessage: FC<PropsWithChildren<Props>> = ({ children, position, className = '' }) => {
  return (
    <div className={styles.container} style={{ justifyContent: position === 'left' ? 'flex-start' : 'flex-end' }}>
      <div className={classNames(styles.message, className)}>{children}</div>
    </div>
  );
};
