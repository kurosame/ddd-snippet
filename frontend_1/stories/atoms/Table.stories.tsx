import type { EmployeeDto } from '@/application/employee/dto/EmployeeDto'
import { Columns, RowEl, Rows, Table as App } from '@/components/atoms/Table'

export default {
  title: 'atoms/Table'
}

type Column = 'id' | 'employeeId' | 'employeeName'

const columns: Columns<Column> = [
  { id: 'employeeId', label: '社員ID' },
  { id: 'employeeName', label: '社員名' }
]

const rowEl: RowEl<EmployeeDto, Column> = e => ({
  id: { content: e.employeeId },
  employeeId: { content: e.employeeId },
  employeeName: { content: e.employeeName }
})

const rows: Rows<EmployeeDto[]> = [
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

export const Table = (): JSX.Element => <App {...{ columns, rowEl, rows }} />
