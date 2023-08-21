import { FC } from 'react';

import { RemoteMessage } from '$lib/components/CodeChat/store/server/models';

import styles from './SqlMessage.module.scss';

interface Props {
  result: RemoteMessage[];
}

export const SqlMessage: FC<Props> = ({ result }) => {
  if (result.length === 0) return <div>No data returned</div>;

  const affected = result
    .filter((msg) => 'affectedRows' in msg)
    .map((msg, i) => <div key={`${msg}-${i}`}>{msg.affectedRows} rows affected</div>);
  if (affected.length > 0) return affected;

  const errors = result
    .filter((msg) => 'error' in msg)
    .map(({ error }, i) => (
      <div key={`${error}-${i}`} className={styles.error}>
        {error}
      </div>
    ));
  if (errors.length > 0) return errors;

  const headers = Object.getOwnPropertyNames(result[0]);

  return (
    <table className={styles.table}>
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
  );
};
