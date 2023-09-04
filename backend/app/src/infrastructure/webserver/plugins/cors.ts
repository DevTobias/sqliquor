import { cors as corsPlugin } from '@elysiajs/cors';
import Elysia from 'elysia';

export const cors = () => {
  return new Elysia({ name: 'elysia-cors' }).use(
    corsPlugin({
      credentials: true,
      allowedHeaders: ['Content-Type', 'Authorization'],
      origin: ({ url }) => {
        return new URL(url).hostname === 'localhost' || new URL(url).hostname === 'sqliqour.com';
      },
    })
  );
};
