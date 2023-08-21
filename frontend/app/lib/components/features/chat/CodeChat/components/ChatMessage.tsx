import { FC } from 'react';

import { type Message } from '$lib/components/CodeChat/components/ChatMessage.types';
import { QueryMessage } from '$lib/components/CodeChat/components/messages/QueryMessage';
import { ResultMessage } from '$lib/components/CodeChat/components/messages/ResultMessage/ResultMessage';

interface Props {
  message: Message;
}

export const ChatMessage: FC<Props> = ({ message }) => {
  switch (message.type) {
    case 'query':
      return <QueryMessage query={message.payload} />;
    case 'result':
      return <ResultMessage result={message.payload} />;
    default:
      return <span></span>;
  }
};
