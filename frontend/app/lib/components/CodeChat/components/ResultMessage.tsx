import { FC } from 'react';

import styles from './ResultMessage.module.scss';

interface Props {
  result: { [key: string]: string | number }[];
}

export const ResultMessage: FC<Props> = ({ result }) => {
  const headers = Object.getOwnPropertyNames(result[0]);

  const affected = result
    .filter((msg) => 'affectedRows' in msg)
    .map((msg, i) => {
      return (
        <div key={`${msg}-${i}`} className={styles.container}>
          <div className={styles.message}>{msg.affectedRows} rows affected</div>
        </div>
      );
    });

  if (affected.length > 0) return affected;

  return (
    <div className={styles.container}>
      <div className={styles.message}>
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
      </div>
    </div>
  );
};
