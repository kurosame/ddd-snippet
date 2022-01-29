import React from 'react'
import { Columns, Rows, Table as App, UniqueColumn } from '@/components/atoms/Table'

export default {
  title: 'atoms'
}

type Column = 'employeeId' | 'employeeName'

const columns: Columns<Column> = [
  { id: 'employeeId', label: '社員ID' },
  { id: 'employeeName', label: '社員名' }
]
const rows: Rows<Column> = [
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
const uniqueColumn: UniqueColumn<Column> = 'employeeId'

export const Table = (): JSX.Element => <App {...{ columns, rows, uniqueColumn }} />
