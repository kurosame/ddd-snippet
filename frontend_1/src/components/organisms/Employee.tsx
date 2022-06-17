import { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useSWRConfig } from 'swr'

import { EmployeeFetchCommand } from '@/application/employee/command/EmployeeFetchCommand'
import { EmployeeUpdateCommand } from '@/application/employee/command/EmployeeUpdateCommand'
import type { EmployeeDto } from '@/application/employee/dto/EmployeeDto'
import { fetchEmployees, updateEmployee } from '@/application/employee/usecase'
import { Button } from '@/components/atoms/Button'
import { EmployeeTable } from '@/components/molecules/EmployeeTable'
import { LabeledTextInput } from '@/components/molecules/LabeledTextInput'
import { employeeState } from '@/store/employee'

export const Employee: React.FC = () => {
  const [employee, setEmployee] = useRecoilState(employeeState)
  const [company, setCompany] = useState<EmployeeUpdateCommand['company']>({ companyName: '' })
  const [employees, setEmployees] = useState<EmployeeDto[]>([])
  const { cache, mutate } = useSWRConfig()

  const fetchToSetEmployees = useCallback(
    () => fetchEmployees(new EmployeeFetchCommand(cache, mutate)).then(r => setEmployees(r)),
    [cache, mutate]
  )

  useEffect(() => {
    fetchToSetEmployees()
  }, [fetchToSetEmployees])

  const handleClick = () => {
    updateEmployee(new EmployeeUpdateCommand(employee, company, cache, mutate)).catch(e => {
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
