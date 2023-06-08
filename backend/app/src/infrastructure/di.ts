import { asValue, createContainer, InjectionMode } from 'awilix';
import { initializeUseCases } from '$application/use_cases';

export const di = createContainer({ injectionMode: InjectionMode.CLASSIC });
export const registerDi = <T>(symbol: string, obj: T) => di.register({ [symbol]: asValue(obj) });
export const resolveDi = <T>(symbol: string) => di.resolve<T>(symbol);

export const initializeDependencies = () => {
  initializeUseCases();
};
