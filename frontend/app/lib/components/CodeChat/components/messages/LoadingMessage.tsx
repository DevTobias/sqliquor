import { GenericMessage } from '$lib/components/CodeChat/components/messages/GenericMessage';

import styles from './LoadingMessage.module.scss';

export const LoadingMessage = () => {
  return (
    <GenericMessage position='left' className={styles.message}>
      <div className={styles.loading}>
        <span />
        <span />
        <span />
      </div>
    </GenericMessage>
  );
};
