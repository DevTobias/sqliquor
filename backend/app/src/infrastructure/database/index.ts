import { PrismaClient } from '$prisma/client';
import { registerDi } from '$infrastructure/di';

export * from '$prisma/client';

export const OrmSymbol = 'prisma_orm';
export type OrmClient = PrismaClient;

export const initializeORM = () => {
  const client = new PrismaClient();
  registerDi(OrmSymbol, client);
  return client;
};
