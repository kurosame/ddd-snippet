import { CompanyName } from '@/domain/vo/CompanyName'

describe('constructor', () => {
  test('create a vo', () => {
    expect(new CompanyName('aaa')).toEqual({ name: 'aaa' })
  })

  test('given an empty company name', () => {
    expect(() => new CompanyName('')).toThrowError(new Error('会社名は必須です'))
  })
})
