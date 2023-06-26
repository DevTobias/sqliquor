'use client';

import { executeQuery } from '$lib/components/CodeChat/data/chat.service';
import { useCodeChatContext } from '$lib/components/CodeChat/store/chat.store';
import { useAuth } from '$lib/hooks/useAuth';

import styles from './SubmitField.module.scss';

export const SubmitField = () => {
  const { authClient } = useAuth();
  const addMessage = useCodeChatContext((s) => s.addMessage);
  const setLoading = useCodeChatContext((s) => s.setLoading);
  const setUnfolded = useCodeChatContext((s) => s.setUnfolded);

  const execute = async (query: string) => {
    addMessage({ type: 'query', payload: query, id: Math.random().toString(36) });
    setLoading(true);

    const result = await executeQuery(authClient!, query);
    addMessage({ type: 'result', payload: result, id: Math.random().toString(36) });
    setLoading(false);
  };

  const focusChat = () => {
    setUnfolded(true);
  };

  return (
    <div className={styles.inputWrapper}>
      <textarea
        onFocus={focusChat}
        className={styles.input}
        placeholder='Query database...'
        onKeyDown={async (e) => {
          if (e.shiftKey) return;

          if (e.key === 'Enter') {
            e.preventDefault();
            execute(e.currentTarget.value);
            e.currentTarget.value = '';
          }
        }}
      />
    </div>
  );
};
