import React, { useState } from 'react'
import { useSWRConfig } from 'swr'
import { EmployeeUpdateCommand } from '@/application/employee/command/EmployeeUpdateCommand'
import { updateEmployee } from '@/application/employee/usecase'
import { Button } from '@/components/atoms/Button'
import { LabeledTextInput } from '@/components/molecules/LabeledTextInput'

export const Employee: React.VFC = () => {
  const [employeeId, setEmployeeId] = useState('')
  const { mutate } = useSWRConfig()

  const handleClick = () => {
    updateEmployee(new EmployeeUpdateCommand(employeeId, mutate)).catch(e => {
      console.error({ 'event-handler-error': e })
    })
  }

  return (
    <>
      <LabeledTextInput label="社員ID" value={employeeId} onChange={v => setEmployeeId(v)} />
      <Button onClick={handleClick}>更新</Button>
    </>
  )
}
