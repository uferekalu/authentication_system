/* eslint-disable prettier/prettier */
export type InfinityPaginationType<T> = Readonly<{
  data: T[];
  hasNexPage: boolean;
}>;
