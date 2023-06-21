export interface SignUpPayload {
  username: string;
  email: string;
  password: string;
}

export interface SignUpResponse {
  email: string;
  username: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  sandboxCreated: boolean;
  sandboxHistory: string[];
}

export interface SignInPayload {
  identifier: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
  refreshToken: string;
}
