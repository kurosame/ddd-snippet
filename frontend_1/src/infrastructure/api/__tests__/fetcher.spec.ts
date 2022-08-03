import { SWRCache } from '@/domain/repository/Repository'
import { mockCache, mockMutate } from '@/infrastructure/api/MockRepository'
import { get, isHaveResponse, put } from '@/infrastructure/api/fetcher'

type FetchResponse = {
  ok?: boolean
  json?: () => unknown
}

describe('fetcher', () => {
  let spyFetch: (res: Promise<FetchResponse>) => jest.SpyInstance
  let cache: { keys: jest.Mock; get: jest.Mock; set: jest.Mock; delete: jest.Mock }
  let mutate: jest.Mock
  beforeEach(() => {
    spyFetch = res => jest.spyOn(global, 'fetch').mockReturnValue(res as Promise<Response>)
    cache = mockCache('/test', 'cache')
    mutate = mockMutate('/test2', 'mutate')
  })

  describe('fetch json', () => {
    test('{ method: GET }, cache is exists', async () => {
      const res = get(new SWRCache('/api', cache), mutate, '/test')

      await expect(res).resolves.toBe('cache')
      expect(fetch).not.toHaveBeenCalled()
    })

    test('{ method: GET }, mutate is run', async () => {
      const fetch = spyFetch(Promise.resolve({ ok: true, json: () => 'ok' }))
      const res = get(new SWRCache('/api', cache), mutate, '/test2')

      await expect(res).resolves.toBe('mutate')
      expect(fetch).toHaveBeenCalled()
      expect(fetch).toHaveBeenCalledWith('/test2', { method: 'GET', headers: { 'Content-Type': 'application/json' } })
    })

    test('{ method: PUT }', async () => {
      const fetch = spyFetch(Promise.resolve({ ok: true, json: () => 'ok' }))
      const res = put(new SWRCache('/api', cache), mutate, '/test2', { data: { test: 'put data' } })

      await expect(res).resolves.toBe('mutate')
      expect(fetch).toHaveBeenCalled()
      expect(fetch).toHaveBeenCalledWith('/test2', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ test: 'put data' })
      })
    })

    // test('fetcher is ng', () => {
    //   const fetch = spyFetch(Promise.resolve({ ok: false, json: () => 'ng' }))

    //   expect(() => get(new SWRCache('/api', cache), mutate, '/test2')).toThrowError(new Error('fetch error: ng'))
    //   expect(fetch).toHaveBeenCalled()
    //   expect(fetch).toHaveBeenCalledWith('/test2', { method: 'GET', headers: { 'Content-Type': 'application/json' } })
    // })
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
