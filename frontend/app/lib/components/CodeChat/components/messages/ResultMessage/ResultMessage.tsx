import { FC } from 'react';

import { ResultMessageType } from '$lib/components/CodeChat/components/ChatMessage.types';
import { LoadingSpinner } from '$lib/components/CodeChat/components/LoadingSpinner';
import { GenericMessage } from '$lib/components/CodeChat/components/messages/GenericMessage';
import { MarkdownMessage } from '$lib/components/CodeChat/components/messages/ResultMessage/MarkdownMessage';
import { SqlMessage } from '$lib/components/CodeChat/components/messages/ResultMessage/SqlMessage';
import { useCodeChatStore } from '$lib/components/CodeChat/store/client/useStore';
import { RemoteMessage } from '$lib/components/CodeChat/store/server/models';
import useAsync from '$lib/hooks/useAsync';

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
