import { ButtonHTMLAttributes, FC } from 'react';

import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'glass' | 'primary' | 'ghost';
}

const Button: FC<Props> = ({ className = '', variant = 'primary', ...rest }) => {
  return <button className={`${styles.btn} ${styles[variant]} ${className}`} {...rest} />;
};

export default Button;
