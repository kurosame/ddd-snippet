import type { EmployeeUpdateCommand } from '@/application/employee/command/EmployeeUpdateCommand'
import { Employee } from '@/domain/entities/Employee'
import { EmployeeService } from '@/domain/services/EmployeeService'
import { ApiEmployeeRepository } from '@/infrastructure/api/ApiEmployeeRepository'

export const updateEmployee = (command: EmployeeUpdateCommand) => {
  const apiEmployeeRepository = new ApiEmployeeRepository()
  const employeeService = new EmployeeService(apiEmployeeRepository)
  const employeeEntity = new Employee(command.employeeId)
  employeeService.isExists(employeeEntity)
}
