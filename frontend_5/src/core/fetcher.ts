type FetchRequestOption = {
  method: 'GET' | 'POST'
  headers?: Record<string, string>
  data?: unknown
}

type ErrorResponse = {
  messages: string[]
}

const fetcher = async <T>(url: string, opt: FetchRequestOption): Promise<T> => {
  const res = await fetch(`${process.env.API_URL ?? ''}${url}`, {
    method: opt.method,
    headers: {
      'Content-Type': 'application/json',
      ...opt.headers
    },
    ...(opt.method === 'POST' && opt.data ? { body: JSON.stringify(opt.data) } : {})
  }).then((r): Promise<T> => {
    if (r.ok) return r.json()
    return r.json().then((e: ErrorResponse) => {
      throw new Error(`fetch error: ${e.messages.join()}`)
    })
  })
  return res
}

export const get = async <T>(url: string, opt: Omit<FetchRequestOption, 'method'> = {}): Promise<T> => {
  const res = await fetcher<T>(url, { method: 'GET', ...opt })
  return res
}

export const post = async <T>(url: string, opt: Omit<FetchRequestOption, 'method'>): Promise<T> => {
  const res = await fetcher<T>(url, { method: 'POST', ...opt })
  return res
}
