export const mockCache: <T>(key: string, value: T) => { get: jest.Mock; delete: jest.Mock } = <T>(
  key: string,
  value: T
) => ({
  get: jest.fn().mockImplementation((k: string) => (k === key ? value : null)),
  delete: jest.fn()
})

export const mockMutate: <T>(key: string, value: T) => jest.Mock = <T>(key: string, value: T) =>
  jest.fn().mockImplementation(
    (k: string) =>
      new Promise(resolve => {
        resolve(k === key ? value : {})
      })
  )
