export type Cache = {
  get: <T>(key: string) => T | null
}
export type Mutate = <T>(key: string, fetcher: Promise<T>) => Promise<T>

export interface ApiRepository {
  cache: Cache
  mutate: Mutate
}
