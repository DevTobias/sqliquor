import { useRef, useState } from 'react';
import { shallow } from 'zustand/shallow';

import { useCodeChatStore } from '$lib/components/CodeChat/store/client/useStore';
import { executeQuery, sendChatMessages } from '$lib/components/CodeChat/store/server/mutations';
import { CodeEditor, EditorTypeHandler } from '$lib/components/CodeEditor/CodeEditor';
import { ToggleSwitch } from '$lib/components/ToggleSwitch';
import { useAuth } from '$lib/hooks/useAuth';
import { highlightCode } from '$lib/utils/highlight';

import styles from './QueryDatabaseField.module.scss';

export const QueryDatabaseField = () => {
  const { authClient } = useAuth();

  const wrapperRef = useRef<HTMLDivElement>(null!);

  const [mode, setMode] = useState<'sql' | 'chat'>('chat');
  const { addMessage, setOpen } = useCodeChatStore((s) => ({ addMessage: s.addMessage, setOpen: s.setOpen }), shallow);

  const queryDatabase = async (query: string) => {
    addMessage({ type: 'query', payload: query, id: Math.random().toString(36) });
    addMessage({ type: 'query_result', payload: executeQuery(authClient!, query), id: Math.random().toString(36) });
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

      if (mode === 'sql') queryDatabase(event.currentTarget.value);
      else sendMessage(event.currentTarget.value);

      return '';
    }

    return true;
  };

  const toggleInput = () => {
    setMode(mode === 'sql' ? 'chat' : 'sql');
  };

  return (
    <div className={styles.container}>
      <ToggleSwitch className={styles.toggle} onChange={toggleInput} />
      <div className={styles.wrapper} ref={wrapperRef}>
        <CodeEditor
          language='sql'
          highlight={mode === 'chat' ? (str) => str : highlightCode}
          onFocus={() => setOpen(true)}
          className={styles.editor}
          placeholder={mode === 'chat' ? 'Send a message' : 'Query the database'}
          onKeyDown={onInputTyping}
        />
      </div>
    </div>
  );
};
