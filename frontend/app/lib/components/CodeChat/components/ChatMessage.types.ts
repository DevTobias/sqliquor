import { RemoteMessage } from '$lib/components/CodeChat/store/server/models';

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
  payload: Promise<string> | string;
}

export type ResultMessageType = QueryResultMessageType | QuestionResultMessageType;
export type Message = QueryMessageType | QuestionMessageType | ResultMessageType;
