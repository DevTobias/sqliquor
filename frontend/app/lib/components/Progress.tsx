import { CSSProperties, FC } from 'react';

import { classNames } from '$lib/utils/classNames';

import styles from './Progress.module.scss';

interface CssProps extends CSSProperties {
  '--completed': string;
}

interface Props {
  value: number;
  className?: string;
  progressColor?: string;
}

export const Progress: FC<Props> = ({ value, className = '', progressColor }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <div
        className={styles.filler}
        style={{ '--completed': `${value}%`, ...(progressColor && { backgroundColor: progressColor }) } as CssProps}
      />
    </div>
  );
};
