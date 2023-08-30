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
  const { selectedAnswer, selectAnswer } = useTaskStore((s) => ({ selectedAnswer: s.selectedAnswer, selectAnswer: s.selectAnswer }));

  return (
    <GenericMessage className={styles.message} position='right' onClick={() => selectAnswer(id)} selected={selectedAnswer === id}>
      <CodeBlock code={query} lang='sql' />
    </GenericMessage>
  );
};
