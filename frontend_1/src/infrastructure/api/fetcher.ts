type FetchRequestOption = {
  method: 'GET' | 'PUT'
  data?: unknown
}

type ErrorResponse = {
  messages: string[]
}

export const fetcher = async <T>(url: string, opt: FetchRequestOption): Promise<T> => {
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

export const isHaveResponse = <T>(r: T | Record<never, never>): r is T => !!Object.keys(r).length
