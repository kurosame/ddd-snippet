import type { Cache, Mutate } from '@/domain/repository/Repository'

type FetchRequestOption = {
  method: 'GET' | 'PUT'
  data?: unknown
}

type ErrorResponse = {
  messages: string[]
}

/* istanbul ignore next */
const fetcher = async <T>(url: string, opt: FetchRequestOption): Promise<T> => {
  const res = await fetch(url, {
    method: opt.method,
    headers: {
      'Content-Type': 'application/json'
    },
    ...(opt.method === 'PUT' && opt.data ? { body: JSON.stringify(opt.data) } : {})
  })
    .then(async (r): Promise<T> => {
      if (r.ok) return r.json()
      return r.json().then((e: ErrorResponse) => {
        throw new Error(`fetch error: ${e.messages.join()}`)
      })
    })
    .catch(e => {
      throw e
    })
  return res
}

const mutator = <T>(mutate: Mutate, url: string, opt: FetchRequestOption): Promise<T> =>
  mutate<T>(url, fetcher<T>(url, opt))

export const get = async <T>(
  cache: Cache,
  mutate: Mutate,
  url: string,
  opt: Omit<FetchRequestOption, 'method'> = {}
): Promise<T> => {
  const res = cache.get<T>(url) ?? (await mutator<T>(mutate, url, { method: 'GET', ...opt }))
  return res
}

export const put = async <T>(mutate: Mutate, url: string, opt: Omit<FetchRequestOption, 'method'>): Promise<T> => {
  const res = await mutator<T>(mutate, url, { method: 'PUT', ...opt })
  return res
}

export const isHaveResponse = <T>(r: T | Record<never, never>): r is T => !!Object.keys(r).length
