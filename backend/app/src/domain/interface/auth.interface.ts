export interface SignUpInterface {
  email: string;
  username: string;
  password: string;
}

export interface ResponseSignUpInterface {
  email: string;
  username: string;
  id: string;
}

export interface TokenInterface {
  accessToken: string;
  refreshToken: string;
  reuseDetected: boolean;
}

export interface SignInInterface {
  identifier: string;
  password: string;
}
