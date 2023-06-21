'use client';

import { useAuth } from '$lib/hooks/useAuth';

export default function Profile() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return <h1>{JSON.stringify(user)}</h1>;
}
