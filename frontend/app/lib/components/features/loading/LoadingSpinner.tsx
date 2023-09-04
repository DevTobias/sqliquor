import { FC } from 'react';

import { classNames } from '$lib/utils/classNames';

import styles from './LoadingSpinner.module.scss';

interface Props {
  variant?: 'dark' | 'light';
}

export const LoadingSpinner: FC<Props> = ({ variant = 'dark' }) => {
  return (
    <div className={classNames(styles.spinner, styles[variant])}>
      <div className={styles.loading}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};
