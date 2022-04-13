import type { Employee } from '@/domain/entity/Employee'
import type { EmployeeRepository } from '@/domain/repository/EmployeeRepository'
import type { EmployeeId } from '@/domain/vo/EmployeeId'

export class EmployeeService {
  readonly #employeeRepository: EmployeeRepository

  public constructor(employeeRepository: EmployeeRepository) {
    this.#employeeRepository = employeeRepository
  }

  public async fetch(employeeId: EmployeeId): Promise<Employee | null> {
    const res = await this.#employeeRepository.find(employeeId)
    return res
  }

  public async fetchAll(): Promise<Employee[]> {
    const res = await this.#employeeRepository.findAll()
    return res
  }

  public async update(employee: Employee): Promise<void> {
    await this.#employeeRepository.save(employee)
  }
}
