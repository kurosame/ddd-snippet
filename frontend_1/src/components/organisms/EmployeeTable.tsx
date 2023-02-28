import type { EmployeeDto } from '@/application/employee/dto/EmployeeDto'
import { Icon } from '@/components/atoms/Icon'
import type { Columns, RowEl, Rows } from '@/components/atoms/Table'
import { Table } from '@/components/atoms/Table'

type Column = 'id' | 'employeeId' | 'employeeName'

type Props = {
  employees: Rows<EmployeeDto[]>
  onSync: () => void
}

export const EmployeeTable: React.FC<Props> = ({ employees, onSync }) => {
  const columns: Columns<Column> = [
    { id: 'employeeId', label: '社員ID' },
    { id: 'employeeName', label: '社員名' }
  ]

  const rowEl: RowEl<EmployeeDto, Column> = e => ({
    id: { content: e.employeeId },
    employeeId: { content: e.employeeId },
    employeeName: { content: e.employeeName }
  })

  return (
    <>
      <Table {...{ columns, rowEl, rows: employees }} />
      <Icon name="sync" onClick={onSync} />
    </>
  )
}
