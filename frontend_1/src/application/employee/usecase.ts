import type { Employee } from '@/domain/entities/Employee'
import { EmployeeService } from '@/domain/services/EmployeeService'
import { ApiEmployeeRepository } from '@/infrastructure/api/ApiEmployeeRepository'

export const updateEmployee = (employee: Employee) => {
  const apiEmployeeRepository = new ApiEmployeeRepository()
  const employeeService = new EmployeeService(apiEmployeeRepository)
  employeeService.isExists(employee)
}
