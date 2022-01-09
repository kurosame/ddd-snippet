import React, { useState } from 'react'

const TextInput: React.VFC = () => {
  const [value, setValue] = useState('')

  return <input type="text" value={value} onChange={e => setValue(e.target.value)} />
}

export default TextInput
