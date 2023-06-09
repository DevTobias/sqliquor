import { SignInPayload, SignInResponse, SignUpPayload, SignUpResponse } from '$lib/pages/auth/data/auth.model';
import { client } from '$lib/utils/http';

export const signUp = async (data: SignUpPayload): Promise<SignUpResponse> => {
  const res = await client.post('auth/signup', { json: data });
  if (res.status !== 200) throw new Error('User with this email or password already exists');
  return (await res.json()) as SignUpResponse;
};

export const signIn = async (data: SignInPayload): Promise<SignInResponse> => {
  const res = await client.post('auth/signin', { json: data });
  if (res.status !== 200) throw new Error('Wrong credentials');
  return (await res.json()) as SignInResponse;
};
