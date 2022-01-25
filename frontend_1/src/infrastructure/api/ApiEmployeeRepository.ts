import { Employee } from '@/domain/entities/Employee'
import type { EmployeeRepository } from '@/domain/repositories/EmployeeRepository'
import type { Mutate } from '@/domain/repositories/Repository'
import type { EmployeeId } from '@/domain/values/EmployeeId'
import { fetcher, isHaveResponse } from '@/infrastructure/api/fetcher'

type ApiEmployeeResponse = {
  employee_id: string
  employee_name: string
}

export class ApiEmployeeRepository implements EmployeeRepository {
  readonly mutate: Mutate

  public constructor(mutate: unknown) {
    this.mutate = mutate as Mutate
  }

  public async find(employeeId: EmployeeId): Promise<Employee | null> {
    const url = `/api/employee?employee_id=${employeeId.id}`
    const res = await this.mutate<ApiEmployeeResponse | Record<never, never>>(
      url,
      fetcher(url, { method: 'GET' })
    ).then(r => (isHaveResponse(r) ? new Employee(r.employee_id) : null))
    return res
  }
}
