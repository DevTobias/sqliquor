import { FC, useRef } from 'react';
import { shallow } from 'zustand/shallow';

import { ChatMessage } from '$lib/components/CodeChat/components/ChatMessage';
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
  const { messages, open, setOpen, messagesNonce } = useCodeChatStore(
    (s) => ({ messages: s.messages, open: s.open, setOpen: s.setOpen, messagesNonce: s.messagesNonce }),
    shallow
  );

  const chatWindowRef = useRef<HTMLDivElement>(null!);
  useClickAway(chatWindowRef, () => setOpen(false));

  const messageAnchorRef = useRef<HTMLDivElement>(null!);
  useScrollTo(messageAnchorRef, [messages, messagesNonce]);

  return (
    <div className={classNames(className, styles.container, !open && styles.closed)} ref={chatWindowRef}>
      <div className={styles.chat}>
        <div className={styles.messages}>
          <div ref={messageAnchorRef} />
          {messages.map((message) => (
            <ChatMessage key={message.id} {...{ message }} />
          ))}
        </div>
        <QueryDatabaseField />
      </div>
    </div>
  );
};
