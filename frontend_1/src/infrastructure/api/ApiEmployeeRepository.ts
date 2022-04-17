import { Employee } from '@/domain/entity/Employee'
import type { EmployeeRepository } from '@/domain/repository/EmployeeRepository'
import type { Cache, Mutate } from '@/domain/repository/Repository'
import type { EmployeeId } from '@/domain/vo/EmployeeId'
import { fetcher, isHaveResponse } from '@/infrastructure/api/fetcher'

type ApiEmployeeResponse = {
  employee_id: string
  employee_name: string
}

export class ApiEmployeeRepository implements EmployeeRepository {
  readonly cache: Cache
  readonly mutate: Mutate

  public constructor(cache: unknown, mutate: unknown) {
    this.cache = cache as Cache
    this.mutate = mutate as Mutate
  }

  public async find(employeeId: EmployeeId): Promise<Employee | null> {
    const url = `/api/employee?employee_id=${employeeId.id}`
    const res =
      this.cache.get<ApiEmployeeResponse>(url) ??
      (await this.mutate<ApiEmployeeResponse | Record<never, never>>(url, fetcher(url, { method: 'GET' })).then(r => {
        const data = isHaveResponse(r) ? r : null
        this.cache.set(url, data)
        return data
      }))
    return res && new Employee(res.employee_id, res.employee_name)
  }

  public async findAll(): Promise<Employee[]> {
    const url = '/api/employee'
    const res =
      this.cache.get<ApiEmployeeResponse[]>(url) ??
      (await this.mutate<ApiEmployeeResponse[]>(url, fetcher(url, { method: 'GET' })))
    return res.map(r => new Employee(r.employee_id, r.employee_name))
  }

  public async save(employee: Employee): Promise<void> {
    const url = `/api/employee?employee_id=${employee.employeeId.id}`
    const data: ApiEmployeeResponse = { employee_id: employee.employeeId.id, employee_name: employee.employeeName.name }
    await this.mutate<void>(url, fetcher(url, { method: 'PUT', data })).then(() => {
      this.cache.set(url, data)
      this.cache.delete('/api/employee')
    })
  }
}
