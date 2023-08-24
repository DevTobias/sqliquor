import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { HttpClient, client, createAuthClient } from '$lib/services/_http';
import { AuthService, SignInPayload, SignUpPayload, User } from '$lib/services/auth.service';

type State = {
  loading: boolean;
  user: User | null;
  client: HttpClient | null;
};

type Actions = {
  signout: () => Promise<void>;
  signin: (credentials: SignInPayload) => Promise<void>;
  signup: (credentials: SignUpPayload) => Promise<void>;
};

export const useAuthStore = createWithEqualityFn<State & Actions>(
  (set, get) => ({
    user: null,
    client: null,
    loading: true,
    signin: async (credentials) => {
      const result = await AuthService.signIn(credentials);
      set({ client: createAuthClient(result.accessToken), user: result.user });
    },
    signup: async (payload) => {
      await AuthService.signUp(payload);
      const result = await AuthService.signIn({ identifier: payload.email, password: payload.password });
      set({ client: createAuthClient(result.accessToken), user: result.user });
    },
    signout: async () => {
      if (!get().client || !get().user) return;
      await AuthService.signOut(get().client!);
      set({ client: null, user: null });
    },
  }),
  shallow
);

client
  .post('auth/refresh')
  .then(async (res) => {
    const data = (await res.json()) as { accessToken: string; refreshToken: string; user: User };
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));
    useAuthStore.setState({ loading: false, user: data.user, client: createAuthClient(data.accessToken) });
  })
  .catch(() => useAuthStore.setState({ loading: false }));
