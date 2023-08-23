import { FC } from 'react';

import { LoadingSpinner } from '$lib/components/features/loading/LoadingSpinner';
import useAsync from '$lib/hooks/useAsync';
import { ResultMessageType } from '$lib/pages/sqliqour/components/CodeChat/components/ChatMessage.types';
import { GenericMessage } from '$lib/pages/sqliqour/components/CodeChat/components/messages/GenericMessage';
import { MarkdownMessage } from '$lib/pages/sqliqour/components/CodeChat/components/messages/ResultMessage/MarkdownMessage';
import { SqlMessage } from '$lib/pages/sqliqour/components/CodeChat/components/messages/ResultMessage/SqlMessage';
import { RemoteMessage } from '$lib/pages/sqliqour/data/services/chat.service';
import { useCodeChatStore } from '$lib/pages/sqliqour/data/store/useCodeChatStore';

import styles from './ResultMessage.module.scss';

interface Props {
  message: ResultMessageType;
}

export const ResultMessage: FC<Props> = ({ message }) => {
  const refreshNonce = useCodeChatStore((s) => s.refreshNonce);

  const state = useAsync(async () => {
    const awaitedResult = await message.payload;
    setTimeout(() => refreshNonce(), 200);
    return awaitedResult;
  }, [message]);

  return (
    <GenericMessage position='left' className={styles.message}>
      {state.loading && <LoadingSpinner />}
      {state.value && !state.loading && message.type === 'query_result' && <SqlMessage result={state.value as RemoteMessage[]} />}
      {state.value && !state.loading && message.type === 'question_result' && <MarkdownMessage result={state.value as string} />}
    </GenericMessage>
  );
};
