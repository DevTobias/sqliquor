export interface SignUpPayload {
  username: string;
  email: string;
  password: string;
}

export interface SignInPayload {
  identifier: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  sandboxCreated: boolean;
  messageHistory: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
  user: User;
}
