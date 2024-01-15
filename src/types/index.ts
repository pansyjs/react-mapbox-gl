export type { KeysOfUnion } from 'type-fest';

export interface Instance {
  on(type: string, handle: (...args: any[]) => void): void;
  off(type: string, handle: (...args: any[]) => void): void;
  [key: string]: any;
}
