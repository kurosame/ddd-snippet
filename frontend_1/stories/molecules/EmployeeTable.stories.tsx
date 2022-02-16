import type { EmployeeDto } from '@/application/employee/dto/EmployeeDto'
import { EmployeeTable as App } from '@/components/molecules/EmployeeTable'

export default {
  title: 'molecules'
}

const employees: EmployeeDto[] = [
  {
    employeeId: 'A000',
    employeeName: 'テストA太郎'
  },
  {
    employeeId: 'B111',
    employeeName: 'テストB太郎'
  },
  {
    employeeId: 'S222',
    employeeName: 'テストS太郎'
  }
]

export const EmployeeTable = (): JSX.Element => <App {...{ employees, onSync: () => console.info('clicked') }} />
