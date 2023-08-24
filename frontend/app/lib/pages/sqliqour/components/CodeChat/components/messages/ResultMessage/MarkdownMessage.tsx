import Markdown from 'markdown-to-jsx';
import { FC } from 'react';

import { CodeBlock } from '$lib/components/CodeBlock';
import { useStream } from '$lib/hooks/useStream';

import styles from './MarkdownMessage.module.scss';

interface Props {
  result: ReadableStream<Uint8Array>;
}

export const MarkdownMessage: FC<Props> = ({ result }) => {
  const value = useStream(result);
  return (
    <Markdown options={{ overrides: { pre: { component: CodeBlock } } }} className={styles.message}>
      {value}
    </Markdown>
  );
};
