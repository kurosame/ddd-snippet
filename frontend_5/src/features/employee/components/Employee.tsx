'use client'

import { useState } from 'react'
import { useRecoilState } from 'recoil'

import { Button } from '@/components/atoms/Button'
import { LabeledTextInput } from '@/components/molecules/LabeledTextInput'
import { EmployeeTable } from '@/features/employee/components/EmployeeTable'
import type { Employee as EmployeeType } from '@/features/employee/types'
import { employeeState } from '@/store/employee'

export const Employee: React.FC = () => {
  const [employee, setEmployee] = useRecoilState(employeeState)
  const [employees] = useState<EmployeeType[]>([])
  // const [employees, setEmployees] = useState<EmployeeType[]>([])

  // const fetchEmployeesAction = useAction(fetchEmployees)
  // const updateEmployeeAction = useAction(updateEmployee)

  // const fetchToSetEmployees = useCallback(
  //   () =>
  //     fetchEmployeesAction().then(r => {
  //       setEmployees(r)
  //     }),
  //   [fetchEmployeesAction]
  // )

  // useEffect(() => {
  //   fetchToSetEmployees().catch(e => {
  //     throw e
  //   })
  // }, [fetchToSetEmployees])

  // const handleClick = () => {
  //   updateEmployeeAction(new EmployeeUpdateCommand(employee, company)).catch((e: Error) => {
  //     console.error({ 'event-handler-error': e })
  //   })
  // }

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
      <Button onClick={() => undefined}>登録</Button>
      {/* <Button onClick={handleClick}>登録</Button> */}
      <EmployeeTable {...{ employees, onSync: () => undefined }} />
      {/* <EmployeeTable {...{ employees, onSync: fetchToSetEmployees }} /> */}
    </>
  )
}
