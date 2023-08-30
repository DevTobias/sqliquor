import { FC } from 'react';

import { Message } from '$lib/pages/sqliqour/components/CodeChat/components/ChatMessage.types';
import { QueryMessage } from '$lib/pages/sqliqour/components/CodeChat/components/messages/QueryMessage';
import { QuestionMessage } from '$lib/pages/sqliqour/components/CodeChat/components/messages/QuestionMessage';
import { ResultMessage } from '$lib/pages/sqliqour/components/CodeChat/components/messages/ResultMessage/ResultMessage';

interface Props {
  message: Message;
}

export const ChatMessage: FC<Props> = ({ message }) => {
  switch (message.type) {
    case 'query':
      return <QueryMessage query={message.payload} id={message.id} />;
    case 'question':
      return <QuestionMessage question={message.payload} />;
    case 'query_result':
    case 'question_result':
      return <ResultMessage message={message} />;
    default:
      return <span></span>;
  }
};
