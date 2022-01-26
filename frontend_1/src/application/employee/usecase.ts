import type { EmployeeUpdateCommand } from '@/application/employee/command/EmployeeUpdateCommand'
import { Employee } from '@/domain/entities/Employee'
import { EmployeeService } from '@/domain/services/EmployeeService'
import { ApiEmployeeRepository } from '@/infrastructure/api/ApiEmployeeRepository'

export const updateEmployee = async (command: EmployeeUpdateCommand): Promise<void> => {
  const apiEmployeeRepository = new ApiEmployeeRepository(command.cache, command.mutate)
  const employeeService = new EmployeeService(apiEmployeeRepository)
  const employeeEntity = new Employee(command.employeeId)

  const res = await employeeService.isExists(employeeEntity)
  if (res) throw new Error('この社員はすでに登録済みです')
  // TODO:POST処理
}
