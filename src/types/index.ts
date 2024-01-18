export type { KeysOfUnion } from 'type-fest';

export interface Instance {
  on(type: string, handle: (...args: any[]) => void): void;
  off(type: string, handle: (...args: any[]) => void): void;
  [key: string]: any;
}

export type OptionalId<T> = T extends { id: string } ? Omit<T, 'id'> & { id?: string } : T;
export type OptionalSource<T> = T extends { source: string }
  ? Omit<T, 'source'> & { source?: string }
  : T;
