import { KeyboardEventHandler } from 'react';
import { shallow } from 'zustand/shallow';

import { useCodeChatStore } from '$lib/components/CodeChat/store/client/useStore';
import { executeQuery } from '$lib/components/CodeChat/store/server/mutations';
import { CodeEditor } from '$lib/components/CodeEditor/CodeEditor';
import { useAuth } from '$lib/hooks/useAuth';
import { highlightCode } from '$lib/utils/highlight';

import styles from './QueryDatabaseField.module.scss';

export const QueryDatabaseField = () => {
  const { authClient } = useAuth();

  const { addMessage, setOpen } = useCodeChatStore((s) => ({ addMessage: s.addMessage, setOpen: s.setOpen }), shallow);

  const queryDatabase = async (query: string) => {
    addMessage({ type: 'query', payload: query, id: Math.random().toString(36) });
    addMessage({ type: 'result', payload: executeQuery(authClient!, query), id: Math.random().toString(36) });
  };

  const onInputTyping: KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.shiftKey) return;

    if (event.key === 'Enter') {
      event.preventDefault();
      queryDatabase(event.currentTarget.value);
      event.currentTarget.value = '';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <CodeEditor
          language='sql'
          highlight={highlightCode}
          onFocus={() => setOpen(true)}
          className={styles.editor}
          placeholder='SELECT * FROM ...'
          onKeyDown={onInputTyping}
        />
      </div>
    </div>
  );
};
