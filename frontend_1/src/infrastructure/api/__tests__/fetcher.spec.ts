import { fetcher, isHaveResponse } from '@/infrastructure/api/fetcher'

type FetchResponse = {
  ok?: boolean
  json?: () => unknown
}

describe('fetcher', () => {
  let spyFetch: (res: Promise<FetchResponse>) => jest.SpyInstance
  beforeEach(() => {
    spyFetch = res => jest.spyOn(global, 'fetch').mockReturnValue(res as Promise<Response>)
  })

  describe('fetch json', () => {
    test('{ method: GET }', () => {
      const fetch = spyFetch(Promise.resolve({ ok: true, json: () => 'ok' }))
      const res = fetcher('/test', { method: 'GET' })

      expect(res).resolves.toBe('ok')
      expect(fetch).toHaveBeenCalled()
      expect(fetch).toHaveBeenCalledWith('/test', { method: 'GET', headers: { 'Content-Type': 'application/json' } })
    })

    test('{ method: PUT }', () => {
      const fetch = spyFetch(Promise.resolve({ ok: true, json: () => 'ok' }))
      const res = fetcher('/test', { method: 'PUT', data: { test: 'put data' } })

      expect(res).resolves.toBe('ok')
      expect(fetch).toHaveBeenCalled()
      expect(fetch).toHaveBeenCalledWith('/test', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ test: 'put data' })
      })
    })
  })

  test('fetch ok is false', () => {
    const fetch = spyFetch(Promise.resolve({ ok: false, json: () => 'ng' }))

    expect(() => fetcher('/test', { method: 'GET' })).rejects.toThrowError(new Error('fetch-ng: ng'))
    expect(fetch).toHaveBeenCalled()
    expect(fetch).toHaveBeenCalledWith('/test', { method: 'GET', headers: { 'Content-Type': 'application/json' } })
  })

  test('fetch rejected', () => {
    const fetch = spyFetch(Promise.reject(new Error('rejected')))

    expect(() => fetcher('/test', { method: 'GET' })).rejects.toThrowError(new Error('rejected'))
    expect(fetch).toHaveBeenCalled()
    expect(fetch).toHaveBeenCalledWith('/test', { method: 'GET', headers: { 'Content-Type': 'application/json' } })
  })
})

describe('isHaveResponse', () => {
  test('given an object has property', () => {
    expect(isHaveResponse({ test: 'test' })).toBeTruthy()
  })

  test('given an empty object', () => {
    expect(isHaveResponse({})).toBeFalsy()
  })
})
