import type { EmployeeDto } from '@/application/employee/dto/EmployeeDto'
import { Icon } from '@/components/atoms/Icon'
import type { Columns, Rows, UniqueColumn } from '@/components/atoms/Table'
import { Table } from '@/components/atoms/Table'

type Column = 'employeeId' | 'employeeName'

type Props = {
  employees: EmployeeDto[]
  onSync: () => void
}

export const EmployeeTable: React.VFC<Props> = ({ employees, onSync }) => {
  const columns: Columns<Column> = [
    { id: 'employeeId', label: '社員ID' },
    { id: 'employeeName', label: '社員名' }
  ]
  const rows: Rows<Column> = employees.map(e => ({ employeeId: e.employeeId, employeeName: e.employeeName }))
  const uniqueColumn: UniqueColumn<Column> = 'employeeId'

  return (
    <>
      <Table {...{ columns, rows, uniqueColumn }} />
      <Icon name="sync" onClick={onSync} />
    </>
  )
}
