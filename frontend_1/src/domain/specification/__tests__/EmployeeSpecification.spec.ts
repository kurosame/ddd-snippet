import { Company } from '@/domain/entity/Company'
import { Employee } from '@/domain/entity/Employee'
import { EmployeeSpecification } from '@/domain/specification/EmployeeSpecification'

describe('isExists', () => {
  test('employee is not exists', () => {
    const specification = new EmployeeSpecification()

    expect(() => specification.isExists(null)).not.toThrowError()
  })

  test('employee is exists', () => {
    const specification = new EmployeeSpecification()
    const employee = new Employee('A123', 'テスト')

    expect(() => specification.isExists(employee)).toThrowError(new Error('この社員はすでに登録済みです'))
  })
})

describe('isBelongCompany', () => {
  test('given an valid company name when the first character of employee id is `A`', () => {
    const specification = new EmployeeSpecification()
    const employee = new Employee('A123', 'テスト')
    const company = new Company('A123', '株式会社A')

    expect(() => specification.isBelongCompany(employee, company)).not.toThrowError()
  })

  test('given an valid company name when the first character of employee id is not `A`', () => {
    const specification = new EmployeeSpecification()
    const employee = new Employee('B123', 'テスト')
    const company = new Company('A123', 'AAA')

    expect(() => specification.isBelongCompany(employee, company)).not.toThrowError()
  })

  test('given an invalid company name', () => {
    const specification = new EmployeeSpecification()
    const employee = new Employee('A123', 'テスト')
    const company = new Company('A123', 'AAA')

    expect(() => specification.isBelongCompany(employee, company)).toThrowError(
      new Error('会社名は株式会社Aを指定してください')
    )
  })
})
