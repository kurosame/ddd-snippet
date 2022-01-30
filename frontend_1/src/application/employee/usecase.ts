import type { EmployeeFetchCommand } from '@/application/employee/command/EmployeeFetchCommand'
import type { EmployeeUpdateCommand } from '@/application/employee/command/EmployeeUpdateCommand'
import { EmployeeDto } from '@/application/employee/dto/EmployeeDto'
import { Employee } from '@/domain/entities/Employee'
import { EmployeeService } from '@/domain/services/EmployeeService'
import { ApiEmployeeRepository } from '@/infrastructure/api/ApiEmployeeRepository'

export const fetchEmployees = async (command: EmployeeFetchCommand): Promise<EmployeeDto[]> => {
  const apiEmployeeRepository = new ApiEmployeeRepository(command.cache, command.mutate)
  const employeeService = new EmployeeService(apiEmployeeRepository)

  const res = await employeeService.fetchAll()
  return res.map(e => new EmployeeDto(e))
}

export const updateEmployee = async (command: EmployeeUpdateCommand): Promise<void> => {
  const apiEmployeeRepository = new ApiEmployeeRepository(command.cache, command.mutate)
  const employeeService = new EmployeeService(apiEmployeeRepository)
  const employeeEntity = new Employee(command.employeeId, '') // TODO:employeeName

  const res = await employeeService.isExists(employeeEntity.employeeId)
  if (res) throw new Error('この社員はすでに登録済みです')
  // TODO:POST処理
}
