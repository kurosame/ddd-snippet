import React, { useState } from 'react'

export const TextInput: React.VFC = () => {
  const [value, setValue] = useState('')

  return <input type="text" value={value} onChange={() => setValue('a')} />
}
