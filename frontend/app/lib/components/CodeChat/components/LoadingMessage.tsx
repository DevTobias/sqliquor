import styles from './LoadingMessage.module.scss';

export const LoadingMessage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <div className={styles['lds-ellipsis']}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
