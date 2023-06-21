import { Icon } from '@/components/atoms/Icon'
import type { Columns, RowEl, Rows } from '@/components/atoms/Table'
import { Table } from '@/components/atoms/Table'
import type { Employee } from '@/features/employee/types'

type Column = 'id' | 'employeeId' | 'employeeName'

type Props = {
  employees: Rows<Employee[]>
  onSync: () => void
}

export const EmployeeTable: React.FC<Props> = ({ employees, onSync }) => {
  const columns: Columns<Column> = [
    { id: 'employeeId', label: '社員ID' },
    { id: 'employeeName', label: '社員名' }
  ]

  const rowEl: RowEl<Employee, Column> = e => ({
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
