import type { EmployeeRepository } from '@/domain/repositories/EmployeeRepository'
import type { EmployeeId } from '@/domain/values/EmployeeId'

export class EmployeeService {
  readonly #employeeRepository: EmployeeRepository

  public constructor(employeeRepository: EmployeeRepository) {
    this.#employeeRepository = employeeRepository
  }

  public async isExists(employeeId: EmployeeId): Promise<boolean> {
    const res = await this.#employeeRepository.find(employeeId)
    return !!res
  }
}
