import { RemoteMessage } from '$lib/pages/sqliqour/data/services/chat.service';

interface QueryMessageType {
  id: string;
  type: 'query';
  payload: string;
}

interface QuestionMessageType {
  id: string;
  type: 'question';
  payload: string;
}

interface QueryResultMessageType {
  id: string;
  type: 'query_result';
  payload: Promise<RemoteMessage[]> | RemoteMessage[];
}

interface QuestionResultMessageType {
  id: string;
  type: 'question_result';
  payload: Promise<ReadableStream<Uint8Array>>;
}

export type ResultMessageType = QueryResultMessageType | QuestionResultMessageType;
export type Message = QueryMessageType | QuestionMessageType | ResultMessageType;
