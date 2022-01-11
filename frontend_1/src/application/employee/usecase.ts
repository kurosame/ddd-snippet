import type { Employee } from '@/domain/entities/Employee'

export const updateEmployee = (employee: Employee) => {
  employee.employeeId.validate()
}
