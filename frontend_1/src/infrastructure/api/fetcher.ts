type FetchRequestOption = {
  method: 'GET'
}

export const fetcher = async <T>(url: string, opt: FetchRequestOption): Promise<T> => {
  const res = await fetch(url, {
    method: opt.method,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(r => {
      if (r.ok) return r.json()
      throw new Error(`api-error: ${r.json()}`)
    })
    .catch(e => {
      throw new Error(`api-error: ${e}`)
    })
  return res
}

export const isHaveResponse = <T>(r: T | Record<never, never>): r is T => !!Object.keys(r).length
