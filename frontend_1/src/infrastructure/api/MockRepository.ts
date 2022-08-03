export const mockCache: <T>(
  key: string,
  value: T
) => { keys: jest.Mock; get: jest.Mock; set: jest.Mock; delete: jest.Mock } = <T>(key: string, value: T) => ({
  keys: jest.fn().mockImplementation(() => ['/api/test']),
  get: jest.fn().mockImplementation((k: string) => (k === key ? value : null)),
  set: jest.fn(),
  delete: jest.fn()
})

export const mockMutate: <T>(key: string, value: T) => jest.Mock = <T>(key: string, value: T) =>
  jest.fn().mockImplementation(
    (k: string) =>
      new Promise(resolve => {
        resolve(k === key ? value : {})
      })
  )
