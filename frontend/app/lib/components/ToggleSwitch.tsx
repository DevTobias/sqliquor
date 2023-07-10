import { FC, InputHTMLAttributes } from 'react';

import styles from './ToggleSwitch.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string | undefined;
}

export const ToggleSwitch: FC<Props> = ({ className, ...rest }) => {
  return (
    <label className={`${styles['toggle-switch']} ${className}`}>
      <input type='checkbox' {...rest} />
      <span className={styles.switch} />
    </label>
  );
};
