import { EmployeeDto } from '@/application/employee/dto/EmployeeDto'
import { Employee } from '@/domain/entities/Employee'
import { EmployeeService } from '@/domain/services/EmployeeService'
import { ApiEmployeeRepository } from '@/infrastructure/api/ApiEmployeeRepository'

import type { EmployeeFetchCommand } from '@/application/employee/command/EmployeeFetchCommand'
import type { EmployeeUpdateCommand } from '@/application/employee/command/EmployeeUpdateCommand'

export const fetchEmployees = async (command: EmployeeFetchCommand): Promise<EmployeeDto[]> => {
  const apiEmployeeRepository = new ApiEmployeeRepository(command.cache, command.mutate)
  const employeeService = new EmployeeService(apiEmployeeRepository)

  const res = await employeeService.fetchAll()
  return res.map(e => new EmployeeDto(e))
}

export const updateEmployee = async (command: EmployeeUpdateCommand): Promise<void> => {
  const apiEmployeeRepository = new ApiEmployeeRepository(command.cache, command.mutate)
  const employeeService = new EmployeeService(apiEmployeeRepository)
  const employee = new Employee(command.employee.employeeId, command.employee.employeeName)

  const res = await employeeService.isExists(employee.employeeId)
  if (res) throw new Error('この社員はすでに登録済みです')
  employeeService.update(employee)
}
