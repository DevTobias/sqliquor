export interface TokenPayload {
  accessToken: string;
  refreshToken: string;
  reuseDetected: boolean;
}

export interface SignInPayload {
  identifier: string;
  password: string;
}
