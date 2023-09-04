import { useEffect, useState } from 'react';

import { LoadingSpinner } from '$lib/components/features/loading/LoadingSpinner';
import { getRandomNumber } from '$lib/utils/random';

import styles from './LoadingScreen.module.scss';

const hints = [
  '📌 SQL steht für "Structured Query Language" und ist eine standardisierte Sprache zum Verwalten relationaler Datenbanken.',
  '🌐 MariaDB wurde von den ursprünglichen Entwicklern von MySQL erstellt und ist zu 100% kompatibel mit MySQL.',
  '🔐 In SQL ist es wichtig, immer die Datenintegrität zu gewährleisten. Fremdschlüssel und Transaktionen können dabei helfen.',
  '⚙️ JOINs in SQL ermöglichen es, Daten aus mehreren Tabellen in einem einzigen Ergebnissatz zu kombinieren.',
  '🚀 Indizes beschleunigen Abfragen erheblich, können aber das Einfügen von Daten verlangsamen. Nutzen Sie sie weise!',
  '💾 In MariaDB wird der Speicherstandard als InnoDB bezeichnet, welcher für ACID-Transaktionen, Fremdschlüsselunterstützung und mehr bekannt ist.',
  '🔍 Das SELECT-Statement wird verwendet, um Daten aus der Datenbank abzurufen, während INSERT, UPDATE und DELETE Daten manipulieren.',
  '⛔ SQL-Injektionen sind eine häufige Sicherheitslücke. Immer parameterisierte Abfragen oder Prepared Statements verwenden!',
  '🔄 Normalisierung in Datenbanken verhindert Datenredundanz und verbessert die Datenintegrität.',
  '💡 SQL-Funktionen wie COUNT, SUM, AVG usw. helfen, Daten direkt auf der Datenbankseite zu aggregieren.',
  '🌟 Der Asterisk (*) in einem SELECT-Statement wählt alle Spalten aus einer Tabelle aus.',
  '🕐 Denken Sie daran, regelmäßige Backups Ihrer Datenbank zu erstellen, um Datenverlust zu verhindern.',
  '💬 Kommentare in SQL beginnen mit -- für Einzeilige und /* */ für Mehrzeilige.',
];

export const LoadingScreen = () => {
  const [hint, setHint] = useState('');

  useEffect(() => {
    setHint(hints[getRandomNumber(0, hints.length)]);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <LoadingSpinner variant='light' />
      </div>
      <p className={styles.hint}>{hint}</p>
    </div>
  );
};
