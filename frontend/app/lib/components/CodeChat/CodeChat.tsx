import { FC, createRef, useEffect } from 'react';

import { LoadingMessage } from '$lib/components/CodeChat/components/LoadingMessage';
import { QueryMessage } from '$lib/components/CodeChat/components/QueryMessage';
import { ResultMessage } from '$lib/components/CodeChat/components/ResultMessage';
import { SubmitField } from '$lib/components/CodeChat/components/SubmitField';
import { useCodeChatContext } from '$lib/components/CodeChat/store/chat.store';
import Button from '$lib/components/Button/Button';
import { Icon } from '$lib/components/Icon';
import { classNames } from '$lib/utils/classNames';

import styles from './CodeChat.module.scss';

interface Props {
  className?: string;
}

export const CodeChat: FC<Props> = ({ className = '' }) => {
  const messages = useCodeChatContext((s) => s.messages);
  const loading = useCodeChatContext((s) => s.loading);
  const unfolded = useCodeChatContext((s) => s.unfolded);
  const setUnfolded = useCodeChatContext((s) => s.setUnfolded);

  const chatEndRef = createRef<HTMLDivElement>();
  useEffect(() => chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }), [messages, chatEndRef]);

  return (
    <div className={styles.container}>
      <Button className={styles.toggle} onClick={() => setUnfolded(!unfolded)}>
        <Icon icon='angle-up' className={classNames(unfolded && styles.rotate, styles.icon)} />
      </Button>
      <div className={classNames(className, styles.chatContainer, !unfolded && styles.inactive)}>
        <div className={classNames(styles.wrapper, !unfolded && styles.inactive)}>
          <div className={classNames(styles.chatWrapper, !unfolded && styles.inactive)}>
            <div ref={chatEndRef} />
            {loading ? <LoadingMessage /> : undefined}
            {messages.map((message) => {
              switch (message.type) {
                case 'query':
                  return <QueryMessage key={message.id} query={message.payload} />;
                case 'result':
                  return <ResultMessage key={message.id} result={message.payload} />;
                default:
                  return <span></span>;
              }
            })}
          </div>
          <SubmitField />
        </div>
      </div>
    </div>
  );
};
