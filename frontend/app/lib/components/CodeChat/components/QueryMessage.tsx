import { CodeBlock } from '$lib/components/CodeBlock/CodeBlock';

import { FC } from 'react';

import styles from './QueryMessage.module.scss';

interface Props {
  query: string;
}

export const QueryMessage: FC<Props> = ({ query }) => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <CodeBlock code={query} lang='sql' />
      </div>
    </div>
  );
};
