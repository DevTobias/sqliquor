import Markdown from 'markdown-to-jsx';

import Button from '$lib/components/Button';
import { CodeBlock } from '$lib/components/CodeBlock';
import { useGameStore } from '$lib/pages/sqliqour/data/store/useGameStore';

import styles from './Tutorial.module.scss';

export const Tutorial = () => {
  const { currentLevel, levels, nextDayOrLevel } = useGameStore((s) => ({
    currentLevel: s.currentLevel,
    levels: s.levels,
    nextDayOrLevel: s.nextDayOrLevel,
  }));

  return (
    <div className={styles.tutorial}>
      <h1>{levels[currentLevel].title}</h1>
      <Markdown options={{ overrides: { pre: { component: CodeBlock } } }}>{levels[currentLevel].tutorial}</Markdown>
      <Button onClick={nextDayOrLevel}>Gelerntes in der Bar anwenden</Button>
    </div>
  );
};
