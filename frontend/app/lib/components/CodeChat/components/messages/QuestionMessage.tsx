import { FC } from 'react';

import { GenericMessage } from '$lib/components/CodeChat/components/messages/GenericMessage';

import styles from './QuestionMessage.module.scss';

interface Props {
  question: string;
}

export const QuestionMessage: FC<Props> = ({ question }) => {
  return (
    <GenericMessage className={styles.message} position='right'>
      <div>{question}</div>
    </GenericMessage>
  );
};
