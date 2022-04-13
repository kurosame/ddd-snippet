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
  const employeeEntity = new Employee(command.employee.employeeId, command.employee.employeeName)
  const companyEntity = new Company(command.company.companyName)

  const employee = await employeeService.fetch(employeeEntity.employeeId)

  employeeSpecification.isExists(employee)
  employeeSpecification.isBelongCompany(employeeEntity, companyEntity)

  employeeService.update(employeeEntity)
}
