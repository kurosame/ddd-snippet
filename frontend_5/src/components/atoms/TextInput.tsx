type Props = {
  value: string
  onChange: (v: string) => void
}

export const TextInput: React.FC<Props> = ({ value, onChange }) => (
  <input type="text" value={value} onChange={e => onChange(e.target.value)} />
)
