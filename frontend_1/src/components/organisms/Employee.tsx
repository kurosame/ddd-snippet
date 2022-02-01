import React, { useEffect, useState } from 'react'
import { useSWRConfig } from 'swr'
import { EmployeeFetchCommand } from '@/application/employee/command/EmployeeFetchCommand'
import { EmployeeUpdateCommand } from '@/application/employee/command/EmployeeUpdateCommand'
import type { EmployeeDto } from '@/application/employee/dto/EmployeeDto'
import { fetchEmployees, updateEmployee } from '@/application/employee/usecase'
import { Button } from '@/components/atoms/Button'
import { EmployeeTable } from '@/components/molecules/EmployeeTable'
import { LabeledTextInput } from '@/components/molecules/LabeledTextInput'

export const Employee: React.VFC = () => {
  const [employeeId, setEmployeeId] = useState('')
  const [employees, setEmployees] = useState<EmployeeDto[]>([])
  const { cache, mutate } = useSWRConfig()

  useEffect(() => {
    fetchEmployees(new EmployeeFetchCommand(cache, mutate)).then(r => setEmployees(r))
  }, [cache, mutate])

  const handleClick = () => {
    updateEmployee(new EmployeeUpdateCommand(employeeId, cache, mutate)).catch(e => {
      console.error({ 'event-handler-error': e })
    })
  }

  return (
    <>
      <LabeledTextInput label="社員ID" value={employeeId} onChange={v => setEmployeeId(v)} />
      <Button onClick={handleClick}>登録</Button>
      <EmployeeTable {...{ employees }} />
    </>
  )
}
