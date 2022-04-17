export type Cache = {
  get: <T>(key: string) => T | null
  set: (key: string, value: unknown) => void
  delete: (key: string) => void
}
export type Mutate = <T>(key: string, fetcher: Promise<T>) => Promise<T>

export interface ApiRepository {
  cache: Cache
  mutate: Mutate
}
