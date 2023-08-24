import { FC, useRef } from 'react';

import { useScrollTo } from '$lib/hooks/useScrollTo';
import { ChatMessage } from '$lib/pages/sqliqour/components/CodeChat/components/ChatMessage';
import { QueryDatabaseField } from '$lib/pages/sqliqour/components/CodeChat/components/QueryDatabaseField';
import { useCodeChatStore } from '$lib/pages/sqliqour/data/store/useCodeChatStore';
import { classNames } from '$lib/utils/classNames';

import styles from './CodeChat.module.scss';

interface Props {
  className?: string;
}

export const CodeChat: FC<Props> = ({ className = '' }) => {
  const { messages, open } = useCodeChatStore((s) => ({ messages: s.messages, open: s.open }));

  const messageAnchorRef = useRef<HTMLDivElement>(null!);
  useScrollTo(messageAnchorRef, [messages]);

  return (
    <div className={classNames(className, styles.container, !open && styles.closed)}>
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
