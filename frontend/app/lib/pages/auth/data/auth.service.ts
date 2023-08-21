import { SignInPayload, SignUpPayload, User, Tokens } from '$lib/pages/auth/data/auth.model';
import { client } from '$lib/utils/http';

export const signUp = async (data: SignUpPayload): Promise<User> => {
  const res = await client.post('auth/signup', { json: data });
  if (res.status !== 200) throw new Error('User with this email or password already exists');
  return (await res.json()) as User;
};

export const signIn = async (data: SignInPayload): Promise<Tokens> => {
  const res = await client.post('auth/signin', { json: data });
  if (res.status !== 200) throw new Error('Wrong credentials');
  return (await res.json()) as Tokens;
};
