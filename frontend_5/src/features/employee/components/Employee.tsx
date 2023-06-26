'use client'

import { use, useMemo, useState } from 'react'
import { useRecoilState } from 'recoil'

import { Button } from '@/components/atoms/Button'
import { LabeledTextInput } from '@/components/molecules/LabeledTextInput'
import type { Employee as EmployeeType } from '@/features/employee'
import { EmployeeTable, fetchEmployees, updateEmployee } from '@/features/employee'
import { employeeState } from '@/store/employee'

export const Employee: React.FC = () => {
  const [employee, setEmployee] = useRecoilState(employeeState)
  const [employees, setEmployees] = useState<EmployeeType[]>(use(useMemo(fetchEmployees, [])))

  return (
    <>
      <LabeledTextInput
        label="社員ID"
        value={employee.employeeId}
        onChange={v => setEmployee({ ...employee, employeeId: v })}
      />
      <LabeledTextInput
        label="社員名"
        value={employee.employeeName}
        onChange={v => setEmployee({ ...employee, employeeName: v })}
      />
      <Button
        onClick={async () => {
          await updateEmployee()
          setEmployees(await fetchEmployees())
        }}
      >
        登録
      </Button>
      <EmployeeTable
        {...{
          employees,
          onSync: async () => {
            setEmployees(await fetchEmployees())
          }
        }}
      />
    </>
  )
}
