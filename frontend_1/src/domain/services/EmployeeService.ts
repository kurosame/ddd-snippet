import type { Employee } from '@/domain/entities/Employee'
import type { EmployeeRepository } from '@/domain/repositories/EmployeeRepository'

export class EmployeeService {
  readonly #employeeRepository: EmployeeRepository

  public constructor(employeeRepository: EmployeeRepository) {
    this.#employeeRepository = employeeRepository
  }

  public async isExists(employee: Employee): Promise<boolean> {
    const res = await this.#employeeRepository.find(employee.employeeId)
    return !!res
  }
}
