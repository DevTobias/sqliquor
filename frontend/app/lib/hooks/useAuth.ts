import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useSWR from 'swr';

import { User } from '$lib/types/user';
import { client, createAuthClient } from '$lib/utils/http';

interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export const useAuth = () => {
  const router = useRouter();

  const { data, error, isLoading } = useSWR<RefreshResponse>('auth/refresh', (url: string) =>
    client.post(url).then((res) => res.json())
  );

  useEffect(() => {
    if (error) router.push('/auth');
  });

  return { user: data?.user, error, isLoading, authClient: data ? createAuthClient(data.accessToken) : null };
};
