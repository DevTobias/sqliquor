import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useSWR from 'swr';

import { User } from '$lib/types/user';
import { client } from '$lib/utils/http';
import { config } from '$lib/config';

interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export const useAuth = () => {
  const router = useRouter();

  const { data, error, isLoading } = useSWR<RefreshResponse>('auth/refresh', (url: string) =>
    client.post(url).then((res) => res.data)
  );

  const authClient = axios.create({
    baseURL: config.backendUrl,
    withCredentials: true,
    headers: { Authorization: `Bearer ${data?.accessToken}` },
  });

  useEffect(() => {
    if (error) router.push('/auth');
  });

  return { user: data?.user, error, isLoading, authClient };
};
