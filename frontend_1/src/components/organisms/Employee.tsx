import React, { useState } from 'react'
import Button from '@/components/atoms/Button'
import LabeledTextInput from '@/components/molecules/LabeledTextInput'

const Employee: React.VFC = () => {
  const [employeeId, setEmployeeId] = useState('')

  return (
    <>
      <LabeledTextInput label="社員ID" value={employeeId} onChange={v => setEmployeeId(v)} />
      <Button onClick={() => undefined}>更新</Button>
    </>
  )
}

export default Employee
