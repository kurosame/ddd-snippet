export type Mutate = <T>(key: string, fetcher: Promise<T>) => Promise<T>

export interface ApiRepository {
  mutate: Mutate
}
