import { CompanyId } from '@/domain/vo/CompanyId'

describe('constructor', () => {
  test('create a vo', () => {
    expect(new CompanyId('aaa')).toEqual({ id: 'aaa' })
  })

  test('given an empty company id', () => {
    expect(() => new CompanyId('')).toThrowError(new Error('会社IDは必須です'))
  })
})
