import { config } from '$lib/config';
import ky from 'ky';

export const client = ky.create({
  prefixUrl: config.backendUrl,
  credentials: 'include',
});

export const createAuthClient = (accessToken: string) =>
  ky.create({ prefixUrl: config.backendUrl, credentials: 'include', headers: { Authorization: `Bearer ${accessToken}` } });
