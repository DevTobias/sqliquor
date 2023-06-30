import { KeyboardEventHandler } from 'react';
import { shallow } from 'zustand/shallow';

import { useCodeChatStore } from '$lib/components/CodeChat/store/client/useStore';
import { executeQuery } from '$lib/components/CodeChat/store/server/mutations';
import { useAuth } from '$lib/hooks/useAuth';

import styles from './QueryDatabaseField.module.scss';

export const QueryDatabaseField = () => {
  const { authClient } = useAuth();

  const { addMessage, setLoading, setOpen } = useCodeChatStore(
    (s) => ({ addMessage: s.addMessage, setLoading: s.setLoading, setOpen: s.setOpen }),
    shallow
  );

  const queryDatabase = async (query: string) => {
    addMessage({ type: 'query', payload: query, id: Math.random().toString(36) });
    setLoading(true);

    const result = await executeQuery(authClient!, query);
    addMessage({ type: 'result', payload: result, id: Math.random().toString(36) });
    setLoading(false);
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
      <textarea onFocus={() => setOpen(true)} className={styles.input} placeholder='SELECT * FROM ...' onKeyDown={onInputTyping} />
    </div>
  );
};
