import { FC, useRef } from 'react';

import { useScrollTo } from '$lib/hooks/useScrollTo';
import { ChatMessage } from '$lib/pages/sqliqour/components/CodeChat/components/ChatMessage';
import { useTaskStore } from '$lib/pages/sqliqour/data/store/useTaskStore';

interface Props {
  className?: string;
}

export const Messages: FC<Props> = ({ className }) => {
  const { activeView, messages } = useTaskStore((s) => ({ messages: s.messages, activeView: s.activeView }));

  const messageAnchorRef = useRef<HTMLDivElement>(null!);
  useScrollTo(messageAnchorRef, [messages], activeView === 'chat');

  return (
    <div className={className}>
      <div ref={messageAnchorRef} />
      {messages.map((message) => (
        <ChatMessage key={message.id} {...{ message }} />
      ))}
    </div>
  );
};
