import { FC, PropsWithChildren } from 'react';

import { GenericMessage } from '$lib/components/CodeChat/components/messages/GenericMessage';

import styles from '../ResultMessage.module.scss';

export const AffectedRowsMessage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <GenericMessage position='left' className={styles.message}>
      {children}
    </GenericMessage>
  );
};
