import { FC, HTMLAttributes } from 'react';

import { classNames } from '$lib/utils/classNames';

import styles from './Icon.module.scss';

export type AvailableIcons =
  | 'angle-up'
  | 'user'
  | 'exit'
  | 'precision_manufactoring'
  | 'receipt_long'
  | 'local_fire_department'
  | 'forum'
  | 'timelapse'
  | 'handyman';

interface Props extends HTMLAttributes<SVGElement> {
  icon: AvailableIcons;
  iconPath?: string;
  className?: string;
}

export const Icon: FC<Props> = ({ icon, iconPath = '/icons/icons.svg', className = '', ...rest }) => {
  return (
    <svg className={classNames(className, styles.icon)} {...rest}>
      <use xlinkHref={`${iconPath}#${icon}`} />
    </svg>
  );
};
