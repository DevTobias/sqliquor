import { t } from 'elysia';

export const messageSchema = t.Array(t.Object({ role: t.String(), content: t.String() }));
export type MessageInterface = (typeof messageSchema.static)[number];
