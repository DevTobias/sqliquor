import deepEqual from 'deep-eql';
import { useRef } from 'react';
import { shallow } from 'zustand/shallow';

import { useCodeChatStore } from '$lib/components/CodeChat/store/client/useStore';
import { executeQuery, sendChatMessages } from '$lib/components/CodeChat/store/server/mutations';
import { fetchLevelData } from '$lib/components/CodeChat/store/server/queries';
import { CodeEditor, EditorTypeHandler } from '$lib/components/CodeEditor/CodeEditor';
import { useAuth } from '$lib/hooks/useAuth';
import { highlightCode } from '$lib/utils/highlight';

import styles from './QueryDatabaseField.module.scss';

export const QueryDatabaseField = () => {
  const { authClient } = useAuth();

  const wrapperRef = useRef<HTMLDivElement>(null!);

  const { addMessage, setOpen, setLevel, activeLevel } = useCodeChatStore(
    (s) => ({ addMessage: s.addMessage, setOpen: s.setOpen, setLevel: s.setLevel, activeLevel: s.activeLevel }),
    shallow
  );

  const queryDatabase = async (query: string) => {
    const queryPromise = executeQuery(authClient!, query);

    addMessage({ type: 'query', payload: query, id: Math.random().toString(36) });
    addMessage({ type: 'query_result', payload: queryPromise, id: Math.random().toString(36) });

    const queryResult = await queryPromise;
    const step = activeLevel?.steps[0];

    if (!step) return;

    if (deepEqual(queryResult, step.expected)) {
      addMessage({ type: 'question_result', payload: step.success, id: Math.random().toString(36) });
    } else {
      addMessage({ type: 'question_result', payload: step.error, id: Math.random().toString(36) });
    }
  };

  const sendMessage = async (message: string) => {
    addMessage({ type: 'question', payload: message, id: Math.random().toString(36) });
    addMessage({
      type: 'question_result',
      payload: sendChatMessages(authClient!, [{ role: 'user', content: message }]),
      id: Math.random().toString(36),
    });
  };

  const onInputTyping: EditorTypeHandler = (event) => {
    if (event.shiftKey && event.key === 'Enter') {
      wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight - wrapperRef.current.clientHeight;
      return true;
    }

    if (event.key === 'Enter') {
      event.preventDefault();

      if (event.currentTarget.value.includes('Hey Caroline')) sendMessage(event.currentTarget.value);
      else queryDatabase(event.currentTarget.value);

      return '';
    }

    return true;
  };

  const loadNextLevel = async () => {
    const level = await fetchLevelData(1);
    setLevel(level);
    addMessage({
      type: 'question_result',
      payload: level.steps[0].task,
      id: Math.random().toString(36),
    });
  };

  return (
    <div
      className={styles.container}
      onDoubleClick={() => {
        loadNextLevel();
      }}
    >
      <div className={styles.wrapper} ref={wrapperRef}>
        <CodeEditor
          language='sql'
          highlight={highlightCode}
          onFocus={() => setOpen(true)}
          className={styles.editor}
          placeholder='Schreib mit Caroline'
          onKeyDown={onInputTyping}
        />
      </div>
    </div>
  );
};
