import styles from './LoadingSpinner.module.scss';

export const LoadingSpinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.loading}>
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};
