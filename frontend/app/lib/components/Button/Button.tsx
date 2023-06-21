import { ButtonHTMLAttributes, FC } from 'react';

import styles from './Button.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = ({ ...rest }) => {
  return <button className={styles.btn} {...rest} />;
};

export default Button;
