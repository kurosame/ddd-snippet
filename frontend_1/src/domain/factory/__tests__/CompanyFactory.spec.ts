import { Company } from '@/domain/entity/Company'
import { CompanyFactory } from '@/domain/factory/CompanyFactory'

describe('create', () => {
  test('create an entity', () => {
    const factory = new CompanyFactory()

    expect(factory.create('会社A')).toStrictEqual(new Company('uuid', '会社A'))
  })
})
