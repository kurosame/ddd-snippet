import type { Employee } from '@/domain/entities/Employee'

export class EmployeeService {
  public static isExists(employee: Employee) {
    console.info(employee)
  }
}
