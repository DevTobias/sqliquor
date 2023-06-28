import { FC, HTMLAttributes } from 'react';

import { classNames } from '$lib/utils/classNames';

import styles from './Icon.module.scss';

interface Props extends HTMLAttributes<SVGElement> {
  icon: 'angle-up';
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
