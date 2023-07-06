import { FC } from 'react';

import { LoadingSpinner } from '$lib/components/CodeChat/components/LoadingSpinner';
import { GenericMessage } from '$lib/components/CodeChat/components/messages/GenericMessage';
import { SqlMessage } from '$lib/components/CodeChat/components/messages/ResultMessage/SqlMessage';
import { useCodeChatStore } from '$lib/components/CodeChat/store/client/useStore';
import { RemoteMessage } from '$lib/components/CodeChat/store/server/models';
import useAsync from '$lib/hooks/useAsync';

import styles from './ResultMessage.module.scss';

interface Props {
  result: Promise<RemoteMessage[]> | RemoteMessage[];
}

export const ResultMessage: FC<Props> = ({ result }) => {
  const refreshNonce = useCodeChatStore((s) => s.refreshNonce);

  const state = useAsync(async () => {
    const awaitedResult = await result;
    setTimeout(() => refreshNonce(), 200);
    return awaitedResult;
  }, [result]);

  return (
    <GenericMessage position='left' className={styles.message}>
      {state.loading && <LoadingSpinner />}
      {state.value && !state.loading && <SqlMessage result={state.value} />}
    </GenericMessage>
  );
};
