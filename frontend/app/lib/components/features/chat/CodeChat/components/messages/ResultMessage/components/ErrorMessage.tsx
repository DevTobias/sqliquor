import { FC, PropsWithChildren } from 'react';

import { GenericMessage } from '$lib/components/CodeChat/components/messages/GenericMessage';
import { classNames } from '$lib/utils/classNames';

import styles from '../ResultMessage.module.scss';

export const ErrorMessage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <GenericMessage position='left' className={classNames(styles.message, styles.error)}>
      {children}
    </GenericMessage>
  );
};
