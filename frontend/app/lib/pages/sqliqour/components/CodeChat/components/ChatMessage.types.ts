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

interface GeneralResultMessageType {
  id: string;
  type: 'general_result';
  payload: string;
}

export type ResultMessageType = QueryResultMessageType | QuestionResultMessageType | GeneralResultMessageType;
export type Message = QueryMessageType | QuestionMessageType | ResultMessageType;
