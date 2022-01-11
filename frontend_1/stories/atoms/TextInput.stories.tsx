import React, { useState } from 'react'
import App from '@/components/atoms/TextInput'

export default {
  title: 'atoms'
}

export const TextInput = (): JSX.Element => {
  const [value, setValue] = useState('default')

  return <App value={value} onChange={v => setValue(v)} />
}
