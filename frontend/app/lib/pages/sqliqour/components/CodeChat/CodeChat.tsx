import { FC, HTMLAttributes } from 'react';

import { Messages } from '$lib/pages/sqliqour/components/CodeChat/components/Messages';
import { QueryDatabaseField } from '$lib/pages/sqliqour/components/CodeChat/components/QueryDatabaseField';
import { TaskWrapper } from '$lib/pages/sqliqour/components/TaskWrapper';

import styles from './CodeChat.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const CodeChat: FC<Props> = ({ className = '', ...rest }) => {
  return (
    <TaskWrapper className={className} {...rest}>
      <Messages className={styles.messages} />
      <QueryDatabaseField />
    </TaskWrapper>
  );
};
