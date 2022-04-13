import { Company } from '@/domain/entity/Company'
import { Employee } from '@/domain/entity/Employee'
import { EmployeeSpecification } from '@/domain/specification/EmployeeSpecification'

describe('isBelongCompany', () => {
  test('given an valid company name when the first character of employee id is `A`', async () => {
    const specification = new EmployeeSpecification()
    const employee = new Employee('A123', 'テスト')
    const company = new Company('株式会社A')

    expect(() => specification.isBelongCompany(employee, company)).not.toThrowError()
  })

  test('given an valid company name when the first character of employee id is not `A`', async () => {
    const specification = new EmployeeSpecification()
    const employee = new Employee('B123', 'テスト')
    const company = new Company('AAA')

    expect(() => specification.isBelongCompany(employee, company)).not.toThrowError()
  })

  test('given an invalid company name', () => {
    const specification = new EmployeeSpecification()
    const employee = new Employee('A123', 'テスト')
    const company = new Company('AAA')

    expect(() => specification.isBelongCompany(employee, company)).toThrowError(
      new Error('会社名は株式会社Aを指定してください')
    )
  })
})
