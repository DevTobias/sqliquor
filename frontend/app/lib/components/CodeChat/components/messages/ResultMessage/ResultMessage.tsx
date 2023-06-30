import { FC } from 'react';

import { GenericMessage } from '$lib/components/CodeChat/components/messages/GenericMessage';
import { AffectedRowsMessage } from '$lib/components/CodeChat/components/messages/ResultMessage/components/AffectedRowsMessage';
import { ErrorMessage } from '$lib/components/CodeChat/components/messages/ResultMessage/components/ErrorMessage';
import { NoDataMessage } from '$lib/components/CodeChat/components/messages/ResultMessage/components/NoDataMessage';
import { RemoteMessage } from '$lib/components/CodeChat/store/server/models';

import styles from './ResultMessage.module.scss';

interface Props {
  result: RemoteMessage[];
}

export const ResultMessage: FC<Props> = ({ result }) => {
  if (result.length === 0) return <NoDataMessage>No data returned</NoDataMessage>;

  const affected = result
    .filter((msg) => 'affectedRows' in msg)
    .map((msg, i) => <AffectedRowsMessage key={`${msg}-${i}`}>{msg.affectedRows} rows affected</AffectedRowsMessage>);
  if (affected.length > 0) return affected;

  const errors = result
    .filter((msg) => 'error' in msg)
    .map(({ error }, i) => <ErrorMessage key={`${error}-${i}`}>{error}</ErrorMessage>);
  if (errors.length > 0) return errors;

  const headers = Object.getOwnPropertyNames(result[0]);

  return (
    <GenericMessage position='left' className={styles.message}>
      <table>
        <thead>
          <tr>
            {headers.map((name) => (
              <th key={name}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {result.map((object, i) => (
            <tr key={JSON.stringify(object) + i}>
              {Object.keys(object).map((key, j) => {
                return <td key={`${object[key]}${j}`}>{object[key]}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </GenericMessage>
  );
};
