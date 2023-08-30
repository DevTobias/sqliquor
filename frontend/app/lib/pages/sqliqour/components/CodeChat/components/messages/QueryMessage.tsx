import { FC } from 'react';

import { CodeBlock } from '$lib/components/CodeBlock';
import { GenericMessage } from '$lib/pages/sqliqour/components/CodeChat/components/messages/GenericMessage';
import { useTaskStore } from '$lib/pages/sqliqour/data/store/useTaskStore';

import styles from './QueryMessage.module.scss';

interface Props {
  query: string;
  id: string;
}

export const QueryMessage: FC<Props> = ({ query, id }) => {
  const { selectedQuery, selectQueryMessage } = useTaskStore((s) => ({
    selectedQuery: s.selectedQuery,
    selectQueryMessage: s.selectQueryMessage,
  }));

  return (
    <GenericMessage className={styles.message} position='right' onClick={() => selectQueryMessage(id)} selected={selectedQuery === id}>
      <CodeBlock code={query} lang='sql' />
    </GenericMessage>
  );
};
