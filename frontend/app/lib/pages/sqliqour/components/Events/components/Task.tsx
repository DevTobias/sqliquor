import Markdown from 'markdown-to-jsx';
import { FC, HTMLAttributes } from 'react';

import { CodeBlock } from '$lib/components/CodeBlock';
import { TaskWrapper } from '$lib/pages/sqliqour/components/TaskWrapper';
import { useGameStore } from '$lib/pages/sqliqour/data/store/useGameStore';
import { useTaskStore } from '$lib/pages/sqliqour/data/store/useTaskStore';

import styles from './Task.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Task: FC<Props> = ({ className, ...rest }) => {
  const { activeEvent } = useTaskStore((s) => ({ activeEvent: s.activeEvent }));
  const { activeEvents } = useGameStore((s) => ({ activeEvents: s.activeEvents.map((e) => e.event) }));

  if (activeEvent === null) return <TaskWrapper className={className} />;
  const { name, task } = activeEvents[activeEvent];

  return (
    <TaskWrapper className={className} {...rest}>
      <div className={styles.content}>
        <h1>{name}</h1>
        <Markdown options={{ overrides: { pre: { component: CodeBlock } } }}>{task}</Markdown>
      </div>
    </TaskWrapper>
  );
};
