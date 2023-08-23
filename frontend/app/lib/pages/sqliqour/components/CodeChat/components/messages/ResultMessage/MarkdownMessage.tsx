import Markdown from 'markdown-to-jsx';
import { FC } from 'react';

import { CodeBlock } from '$lib/components/CodeBlock';

import styles from './MarkdownMessage.module.scss';

interface Props {
  result: string;
}

export const MarkdownMessage: FC<Props> = ({ result }) => {
  return (
    <Markdown options={{ overrides: { pre: { component: CodeBlock } } }} className={styles.message}>
      {result}
    </Markdown>
  );
};
