import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from '$lib/utils/classNames';

import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'glass' | 'primary' | 'ghost';
  fullwidth?: boolean;
}

const Button: FC<Props> = ({ className = '', variant = 'primary', fullwidth = false, ...rest }) => {
  return <button className={classNames(styles.btn, styles[variant], fullwidth && styles.fullwidth, className)} {...rest} />;
};

export default Button;
