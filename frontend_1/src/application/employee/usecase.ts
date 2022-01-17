import type { Employee } from '@/domain/entities/Employee'
import { EmployeeService } from '@/domain/services/EmployeeService'

export const updateEmployee = (employee: Employee) => {
  EmployeeService.isExists(employee)
}
