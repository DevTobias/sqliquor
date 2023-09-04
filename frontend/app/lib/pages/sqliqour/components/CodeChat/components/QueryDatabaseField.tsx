import { useRef } from 'react';

import { CodeEditor, EditorTypeHandler } from '$lib/pages/sqliqour/components/CodeEditor/CodeEditor';
import { useTaskStore } from '$lib/pages/sqliqour/data/store/useTaskStore';
import { useAuthStore } from '$lib/store/auth.store';
import { highlightCode } from '$lib/utils/highlight';

import styles from './QueryDatabaseField.module.scss';

export const QueryDatabaseField = () => {
  const { client } = useAuthStore();
  const wrapperRef = useRef<HTMLDivElement>(null!);

  const { queryUserDatabase, askMessage } = useTaskStore((s) => ({
    queryUserDatabase: s.queryUserDatabase,
    askMessage: s.askMessage,
  }));

  const onInputTyping: EditorTypeHandler = (event) => {
    if (event.shiftKey && event.key === 'Enter') {
      wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight - wrapperRef.current.clientHeight;
      return true;
    }

    if (event.key === 'Enter') {
      event.preventDefault();

      if (event.currentTarget.value.includes('Hey Caroline')) askMessage(client!, event.currentTarget.value);
      else queryUserDatabase(client!, event.currentTarget.value);

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
