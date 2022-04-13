import type { EmployeeFetchCommand } from '@/application/employee/command/EmployeeFetchCommand'
import type { EmployeeUpdateCommand } from '@/application/employee/command/EmployeeUpdateCommand'
import { EmployeeDto } from '@/application/employee/dto/EmployeeDto'
import { Company } from '@/domain/entity/Company'
import { Employee } from '@/domain/entity/Employee'
import { EmployeeService } from '@/domain/service/EmployeeService'
import { EmployeeSpecification } from '@/domain/specification/EmployeeSpecification'
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
  const employeeSpecification = new EmployeeSpecification()
  const employee = new Employee(command.employee.employeeId, command.employee.employeeName)
  const company = new Company(command.company.companyName)

  const res = await employeeService.isExists(employee.employeeId)
  if (res) throw new Error('この社員はすでに登録済みです')

  employeeSpecification.isBelongCompany(employee, company)

  employeeService.update(employee)
}
