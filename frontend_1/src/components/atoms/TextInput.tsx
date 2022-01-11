import React from 'react'

type Props = {
  value: string
  onChange: (value: string) => void
}

const TextInput: React.VFC<Props> = ({ value, onChange }) => (
  <input type="text" value={value} onChange={e => onChange(e.target.value)} />
)

export default TextInput
