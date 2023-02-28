import { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

import { EmployeeUpdateCommand } from '@/application/employee/command/EmployeeUpdateCommand'
import type { EmployeeDto } from '@/application/employee/dto/EmployeeDto'
import { fetchEmployees, updateEmployee } from '@/application/employee/usecase'
import { Button } from '@/components/atoms/Button'
import { useAction } from '@/components/hooks/action'
import { LabeledTextInput } from '@/components/molecules/LabeledTextInput'
import { EmployeeTable } from '@/components/organisms/EmployeeTable'
import { employeeState } from '@/store/employee'

export const Employee: React.FC = () => {
  const [employee, setEmployee] = useRecoilState(employeeState)
  const [company, setCompany] = useState<EmployeeUpdateCommand['company']>({ companyName: '' })
  const [employees, setEmployees] = useState<EmployeeDto[]>([])

  const fetchEmployeesAction = useAction(fetchEmployees)
  const updateEmployeeAction = useAction(updateEmployee)

  const fetchToSetEmployees = useCallback(
    () =>
      fetchEmployeesAction().then(r => {
        setEmployees(r)
      }),
    [fetchEmployeesAction]
  )

  useEffect(() => {
    fetchToSetEmployees().catch(e => {
      throw e
    })
  }, [fetchToSetEmployees])

  const handleClick = () => {
    updateEmployeeAction(new EmployeeUpdateCommand(employee, company)).catch((e: Error) => {
      console.error({ 'event-handler-error': e })
    })
  }

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
      <LabeledTextInput label="会社名" value={company.companyName} onChange={v => setCompany({ companyName: v })} />
      <Button onClick={handleClick}>登録</Button>
      <EmployeeTable {...{ employees, onSync: fetchToSetEmployees }} />
    </>
  )
}
