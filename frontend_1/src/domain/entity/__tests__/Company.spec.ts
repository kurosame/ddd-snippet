import { Company } from '@/domain/entity/Company'
import { CompanyName } from '@/domain/vo/CompanyName'

describe('constructor', () => {
  test('create an entity', () => {
    expect(new Company('テスト社')).toEqual({
      companyName: new CompanyName('テスト社')
    })
  })
})
