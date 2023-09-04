import ky from 'ky';
import { KyInstance } from 'ky/distribution/types/ky';

import { config } from '$lib/config';

export type HttpClient = KyInstance;

export const client = ky.create({ prefixUrl: config.backendUrl, credentials: 'include' });

export const cmsClient = ky.create({ prefixUrl: config.cmsUrl, credentials: 'include' });

export const createAuthClient = (accessToken: string): HttpClient =>
  ky.create({ prefixUrl: config.backendUrl, credentials: 'include', headers: { Authorization: `Bearer ${accessToken}` } });
