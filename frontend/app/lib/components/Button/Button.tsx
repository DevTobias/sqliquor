import { ButtonHTMLAttributes, FC } from 'react';

import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<Props> = ({ className = '', ...rest }) => {
  return <button className={`${styles.btn} ${className}`} {...rest} />;
};

export default Button;
