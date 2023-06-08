export interface RegisterResponse {
  email: string;
  username: string;
  id: string;
}

export interface RegisterPayload {
  email: string;
  username: string;
  password: string;
}
