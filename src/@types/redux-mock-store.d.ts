declare module 'redux-mock-store' {
  import { Middleware, Store } from 'redux';

  export interface MockStoreCreator<S> {
    (initialState?: S, middlewares?: Middleware[]): Store<S>;
  }

  export function createMockStore<S>(
    middlewares?: Middleware[]
  ): MockStoreCreator<S>;
  export default createMockStore;
}
