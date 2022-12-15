import type { ActionConfigure } from '@/application/action'
import type { EmployeeUpdateCommand } from '@/application/employee/command/EmployeeUpdateCommand'
import { EmployeeDto } from '@/application/employee/dto/EmployeeDto'
import { Employee } from '@/domain/entity/Employee'
import { CompanyFactory } from '@/domain/factory/CompanyFactory'
import { EmployeeService } from '@/domain/service/EmployeeService'
import { EmployeeSpecification } from '@/domain/specification/EmployeeSpecification'

export const fetchEmployees =
  ({ actionContext }: { actionContext: ActionConfigure }) =>
  async (): Promise<EmployeeDto[]> => {
    const employeeService = new EmployeeService(actionContext.employeeRepository)

    const res = await employeeService.fetchAll()
    return res.map(e => new EmployeeDto(e))
  }

export const updateEmployee =
  ({ actionContext }: { actionContext: ActionConfigure }) =>
  async (command: EmployeeUpdateCommand): Promise<void> => {
    const employeeService = new EmployeeService(actionContext.employeeRepository)
    const employeeSpecification = new EmployeeSpecification()
    const employeeEntity = new Employee(command.employee.employeeId, command.employee.employeeName)
    const companyEntity = new CompanyFactory().create(command.company.companyName)

    const employee = await employeeService.fetch(employeeEntity.employeeId)

    employeeSpecification.isExists(employee)
    employeeSpecification.isBelongCompany(employeeEntity, companyEntity)

    await employeeService.update(employeeEntity)
  }
