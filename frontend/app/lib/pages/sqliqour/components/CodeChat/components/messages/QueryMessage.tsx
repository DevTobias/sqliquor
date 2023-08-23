import { FC } from 'react';

import { CodeBlock } from '$lib/components/CodeBlock';
import { GenericMessage } from '$lib/pages/sqliqour/components/CodeChat/components/messages/GenericMessage';

import styles from './QueryMessage.module.scss';

interface Props {
  query: string;
}

export const QueryMessage: FC<Props> = ({ query }) => {
  return (
    <GenericMessage className={styles.message} position='right'>
      <CodeBlock code={query} lang='sql' />
    </GenericMessage>
  );
};
