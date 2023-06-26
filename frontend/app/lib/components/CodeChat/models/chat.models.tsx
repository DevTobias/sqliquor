interface QueryMessageType {
  id: string;
  type: 'query';
  payload: string;
}

interface ResultMessageType {
  id: string;
  type: 'result';
  payload: { [key: string]: string | number }[];
}

export type ChatMessage = QueryMessageType | ResultMessageType;
