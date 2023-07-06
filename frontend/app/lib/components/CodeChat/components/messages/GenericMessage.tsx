import { FC, PropsWithChildren } from 'react';
import { useMeasure } from 'react-use';

import { classNames } from '$lib/utils/classNames';

import styles from './GenericMessage.module.scss';

interface Props {
  className?: string;
  position: 'left' | 'right';
}

export const GenericMessage: FC<PropsWithChildren<Props>> = ({ children, position, className = '' }) => {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>();

  return (
    <div className={styles.container} style={{ justifyContent: position === 'left' ? 'flex-start' : 'flex-end' }}>
      <div
        className={classNames(styles.message, className)}
        style={{ height: height > 0 ? height + 30 : 'auto', width: width > 0 ? width + 30 : 'auto' }}
      >
        <div ref={ref} style={{ width: 'fit-content', whiteSpace: 'nowrap' }}>
          {children}
        </div>
      </div>
    </div>
  );
};
