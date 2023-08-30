import { FC } from 'react';

import { classNames } from '$lib/utils/classNames';

import styles from './AnimatedCheckmark.module.scss';

interface Props {
  className?: string;
}

export const AnimatedCheckmark: FC<Props> = ({ className }) => {
  return (
    <svg className={classNames(styles.checkmark, className)} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>
      <circle className={styles.circle} cx='26' cy='26' r='25' fill='none' />{' '}
      <path className={styles.check} fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8' />
    </svg>
  );
};
