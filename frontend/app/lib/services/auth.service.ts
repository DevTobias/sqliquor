import { client, HttpClient } from '$lib/services/_http';

export const AuthService = {
  signUp: async (data: SignUpPayload): Promise<User> => {
    const res = await client.post('auth/signup', { json: data });
    if (res.status !== 200) throw new Error('User with this email or password already exists');
    return (await res.json()) as User;
  },

  signIn: async (data: SignInPayload): Promise<Tokens> => {
    const res = await client.post('auth/signin', { json: data });
    if (res.status !== 200) throw new Error('Invalid credentials');
    return (await res.json()) as Tokens;
  },

  signOut: async (authClient: HttpClient) => {
    await authClient.post('auth/signout');
  },
};

export interface User {
  id: string;
  email: string;
  username: string;
  sandboxCreated: boolean;
  messageHistory: string[];
  createdAt: string;
  updatedAt: string;
}

export interface SignUpPayload {
  username: string;
  email: string;
  password: string;
}

export interface SignInPayload {
  identifier: string;
  password: string;
}

interface Tokens {
  accessToken: string;
  refreshToken: string;
  user: User;
}
