import { RemoteMessage } from '$lib/components/CodeChat/store/server/models';

interface QueryMessageType {
  id: string;
  type: 'query';
  payload: string;
}

interface ResultMessageType {
  id: string;
  type: 'result';
  payload: Promise<RemoteMessage[]> | RemoteMessage[];
}

export type Message = QueryMessageType | ResultMessageType;
