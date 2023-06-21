import { FC, InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: FC<Props> = ({ ...rest }) => {
  return <input className={styles.input} {...rest} />;
};

export default Input;
