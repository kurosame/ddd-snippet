import type Employee from '@/domain/entities/Employee'

const updateEmployee = (employee: Employee) => {
  employee.employeeId.validate()
}

export default updateEmployee
