import React, { useState } from 'react'
import { LabeledTextInput as App } from '@/components/molecules/LabeledTextInput'

export default {
  title: 'molecules'
}

export const LabeledTextInput = (): JSX.Element => {
  const [value, setValue] = useState('default')

  return <App label="ラベル" value={value} onChange={v => setValue(v)} />
}
