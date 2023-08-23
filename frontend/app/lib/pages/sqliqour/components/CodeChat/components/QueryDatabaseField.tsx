import { useRef } from 'react';

import { CodeEditor, EditorTypeHandler } from '$lib/pages/sqliqour/components/CodeEditor/CodeEditor';
import { ChatService } from '$lib/pages/sqliqour/data/services/chat.service';
import { useCodeChatStore } from '$lib/pages/sqliqour/data/store/useCodeChatStore';
import { useAuthStore } from '$lib/store/auth.store';
import { highlightCode } from '$lib/utils/highlight';
import { generateSimpleId } from '$lib/utils/random';

import styles from './QueryDatabaseField.module.scss';

export const QueryDatabaseField = () => {
  const { client } = useAuthStore();
  const wrapperRef = useRef<HTMLDivElement>(null!);

  const { addMessage } = useCodeChatStore((s) => ({ addMessage: s.addMessage }));

  const queryDatabase = async (query: string) => {
    const queryPromise = ChatService.execute(client!, query);

    addMessage({ type: 'query', payload: query, id: generateSimpleId() });
    addMessage({ type: 'query_result', payload: queryPromise, id: generateSimpleId() });
  };

  const sendMessage = async (message: string) => {
    addMessage({ type: 'question', payload: message, id: generateSimpleId() });
    addMessage({
      type: 'question_result',
      payload: ChatService.sendMessage(client!, [{ role: 'user', content: message }]),
      id: generateSimpleId(),
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

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} ref={wrapperRef}>
        <CodeEditor
          language='sql'
          highlight={highlightCode}
          className={styles.editor}
          placeholder='Schreib mit Caroline'
          onKeyDown={onInputTyping}
        />
      </div>
    </div>
  );
};
