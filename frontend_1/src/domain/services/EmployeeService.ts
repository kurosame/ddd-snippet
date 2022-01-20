import type { Employee } from '@/domain/entities/Employee'
import type { EmployeeRepository } from '@/domain/repositories/EmployeeRepository'

export class EmployeeService {
  readonly #employeeRepository: EmployeeRepository

  public constructor(employeeRepository: EmployeeRepository) {
    this.#employeeRepository = employeeRepository
  }

  public isExists(employee: Employee) {
    this.#employeeRepository.find(employee.employeeId)
  }
}
