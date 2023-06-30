import { FC, useRef } from 'react';
import { shallow } from 'zustand/shallow';

import { ChatMessage } from '$lib/components/CodeChat/components/ChatMessage';
import { LoadingMessage } from '$lib/components/CodeChat/components/messages/LoadingMessage';
import { QueryDatabaseField } from '$lib/components/CodeChat/components/QueryDatabaseField';
import { useCodeChatStore } from '$lib/components/CodeChat/store/client/useStore';
import { useClickAway } from '$lib/hooks/useClickAway';
import { useScrollTo } from '$lib/hooks/useScrollTo';
import { classNames } from '$lib/utils/classNames';

import styles from './CodeChat.module.scss';

interface Props {
  className?: string;
}

export const CodeChat: FC<Props> = ({ className = '' }) => {
  const { messages, loading, open, setOpen } = useCodeChatStore(
    (s) => ({ messages: s.messages, loading: s.loading, open: s.open, setOpen: s.setOpen }),
    shallow
  );

  const chatWindowRef = useRef<HTMLDivElement>(null!);
  useClickAway(chatWindowRef, () => setOpen(false));

  const messageAnchorRef = useRef<HTMLDivElement>(null!);
  useScrollTo(messageAnchorRef, [messages]);

  return (
    <div className={classNames(className, styles.container, !open && styles.closed)} ref={chatWindowRef}>
      <div className={styles.chat}>
        <div className={styles.messages}>
          <div ref={messageAnchorRef} />
          {loading && <LoadingMessage />}
          {messages.map((message) => (
            <ChatMessage key={message.id} {...{ message }} />
          ))}
        </div>
        <QueryDatabaseField />
      </div>
    </div>
  );
};
