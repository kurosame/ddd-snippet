import { useState } from 'react'
import { TextInput as App } from '@/components/atoms/TextInput'

export default {
  title: 'atoms'
}

export const TextInput = (): JSX.Element => {
  const [value, setValue] = useState('default')

  return <App value={value} onChange={v => setValue(v)} />
}
