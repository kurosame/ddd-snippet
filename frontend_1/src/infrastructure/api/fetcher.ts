import type { Mutate, SWRCache } from '@/domain/repository/Repository'

type FetchRequestOption = {
  method: 'GET' | 'PUT'
  data?: unknown
}

type ErrorResponse = {
  messages: string[]
}

const fetcher = async <T>(url: string, opt: FetchRequestOption): Promise<T> => {
  const res = await fetch(url, {
    method: opt.method,
    headers: {
      'Content-Type': 'application/json'
    },
    ...(opt.method === 'PUT' && opt.data ? { body: JSON.stringify(opt.data) } : {})
  }).then(async (r): Promise<T> => {
    if (r.ok) return r.json()
    /* istanbul ignore next */
    return r.json().then((e: ErrorResponse) => {
      throw new Error(`fetch error: ${e.messages.join()}`)
    })
  })
  return res
}

const mutator = <T>(mutate: Mutate, url: string, opt: FetchRequestOption): Promise<T> =>
  mutate<T>(url, fetcher<T>(url, opt))

const deleteCaches = (swrCache: SWRCache) => {
  const re = new RegExp(`^${swrCache.key}\\??.*`)
  const keys = Array.from(swrCache.cache.keys()).filter(k => re.test(k))
  keys.forEach(k => swrCache.cache.delete(k))
  console.info({ 'deleted-caches': keys })
}

export const get = async <T>(
  swrCache: SWRCache,
  mutate: Mutate,
  url: string,
  opt: Omit<FetchRequestOption, 'method'> = {}
): Promise<T> => {
  const res = swrCache.cache.get<T>(url) ?? (await mutator<T>(mutate, url, { method: 'GET', ...opt }))
  return res
}

export const put = async <T>(
  swrCache: SWRCache,
  mutate: Mutate,
  url: string,
  opt: Omit<FetchRequestOption, 'method'>
): Promise<T> => {
  const res = await mutator<T>(mutate, url, { method: 'PUT', ...opt }).then(r => {
    deleteCaches(swrCache)
    return r
  })
  return res
}

export const isHaveResponse = <T>(r: T | Record<never, never>): r is T => !!Object.keys(r).length
