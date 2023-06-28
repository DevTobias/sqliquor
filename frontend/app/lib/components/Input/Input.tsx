import { InputHTMLAttributes, forwardRef } from 'react';
import { classNames } from '$lib/utils/classNames';
import styles from './Input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined;
}

const Input = forwardRef<HTMLInputElement, Props>(({ error, ...rest }, ref) => {
  return (
    <div className={styles.container}>
      <input
        className={classNames(styles.input, error && styles.error)}
        ref={ref}
        autoComplete={rest.type === 'password' ? 'on' : 'off'}
        {...rest}
      />

      {error && <span className={styles.errorLabel}>{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
