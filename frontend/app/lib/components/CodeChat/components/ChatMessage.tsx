import { FC } from 'react';

import { type Message } from '$lib/components/CodeChat/components/ChatMessage.types';
import { QueryMessage } from '$lib/components/CodeChat/components/messages/QueryMessage';
import { QuestionMessage } from '$lib/components/CodeChat/components/messages/QuestionMessage';
import { ResultMessage } from '$lib/components/CodeChat/components/messages/ResultMessage/ResultMessage';

interface Props {
  message: Message;
}

export const ChatMessage: FC<Props> = ({ message }) => {
  switch (message.type) {
    case 'query':
      return <QueryMessage query={message.payload} />;
    case 'question':
      return <QuestionMessage question={message.payload} />;
    case 'query_result':
    case 'question_result':
      return <ResultMessage message={message} />;
    default:
      return <span></span>;
  }
};
