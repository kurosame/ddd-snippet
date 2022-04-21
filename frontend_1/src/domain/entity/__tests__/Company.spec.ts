import { Company } from '@/domain/entity/Company'
import { CompanyId } from '@/domain/vo/CompanyId'
import { CompanyName } from '@/domain/vo/CompanyName'

describe('constructor', () => {
  test('create an entity', () => {
    expect(new Company('aaa', 'テスト社')).toEqual({
      companyId: new CompanyId('aaa'),
      companyName: new CompanyName('テスト社')
    })
  })
})
