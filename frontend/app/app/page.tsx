'use client';

import { CodeChat } from '$lib/components/CodeChat/CodeChat';
import { Message } from '$lib/components/CodeChat/components/ChatMessage.types';
import { CodeChatProvider } from '$lib/components/CodeChat/store/client/useStore';
import { CodeEditor } from '$lib/components/CodeEditor';

import styles from './page.module.scss';

const messages: Message[] = [
  {
    id: 'cd6507d9-30b0-478d-94b6-6e527f042eeb',
    type: 'result',
    payload: [
      {
        id: 1,
        name: 'Sachin',
        sports: 'Cricket',
      },
      {
        id: 2,
        name: 'Dhoni',
        sports: 'Cricket',
      },
      {
        id: 3,
        name: 'Sunil',
        sports: 'Football',
      },
      {
        id: 4,
        name: 'Srikanth',
        sports: 'Badminton',
      },
      {
        id: 5,
        name: 'Mary',
        sports: 'Boxing',
      },
    ],
  },
  {
    id: 'd234d608-823a-40f6-b889-991704733d9c',
    type: 'query',
    payload: `SELECT * FROM players;`,
  },
  {
    id: '170830ed-8339-4e23-b229-6059329d7ba3',
    type: 'result',
    payload: [
      {
        affectedRows: 5,
        insertId: '1',
        warningStatus: 0,
      },
    ],
  },
  {
    id: 'f57eb29a-9456-4e75-86d8-190e385bcc06',
    type: 'query',
    payload: `INSERT INTO players (name, sports) VALUES
  ('Sachin', 'Cricket'),
  ('Dhoni', 'Cricket'),
  ('Sunil', 'Football'),
  ('Srikanth', 'Badminton'),
  ('Mary', 'Boxing');`,
  },
  {
    id: '18373006-371d-40e5-adb8-86f3d5298ddb',
    type: 'result',
    payload: [
      {
        affectedRows: 0,
        insertId: '0',
        warningStatus: 0,
      },
    ],
  },
  {
    id: 'cd790991-b562-4e7b-b384-ebcc232f6107',
    type: 'query',
    payload: `CREATE TABLE IF NOT EXISTS players (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  sports VARCHAR(50),
  PRIMARY KEY(id)
);`,
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.chatWrapper}>
        <CodeChatProvider messages={messages}>
          <CodeChat className={styles.chat} />
          <CodeEditor />
        </CodeChatProvider>
      </div>
    </div>
  );
}
