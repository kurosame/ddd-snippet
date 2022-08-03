export type Cache = {
  keys(): IterableIterator<string>
  get<T>(key: string): T | null
  set(key: string, value: unknown): void
  delete(key: string): void
}

export class SWRCache {
  readonly key: string
  readonly cache: Cache

  public constructor(endpoint: string, cache: Cache) {
    this.key = endpoint
    this.cache = cache
  }
}
export type Mutate = <T>(key: string, fetcher: Promise<T>) => Promise<T>

export interface ApiRepository {
  swrCache: SWRCache
  mutate: Mutate
}
