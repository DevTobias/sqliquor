import { InferModel, sql } from 'drizzle-orm';
import { pgTable, uuid, text, timestamp, boolean } from 'drizzle-orm/pg-core';

const emptyArray = sql`'{}'`;

export const user = pgTable('user', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull().unique(),
  username: text('username').notNull().unique(),
  password: text('password').notNull(),
  tokens: text('tokens').array().default(emptyArray).notNull(),
  sandboxCreated: boolean('sandbox_created').default(false).notNull(),
  sandboxPassword: uuid('sandbox_password').defaultRandom().notNull(),
  messageHistory: text('message_history').array().default(emptyArray).notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).defaultNow().notNull(),
});

export type User = InferModel<typeof user>;
export type CreateUser = Pick<InferModel<typeof user, 'insert'>, 'email' | 'username' | 'password'>;
export type UpdateUser = { id: string } & Partial<
  Pick<
    InferModel<typeof user, 'insert'>,
    'email' | 'username' | 'password' | 'messageHistory' | 'updatedAt' | 'sandboxCreated'
  >
>;
export type PublicUser = Omit<User, 'password' | 'tokens' | 'sandboxPassword'>;
