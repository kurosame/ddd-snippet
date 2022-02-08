import { Label } from '@/components/atoms/Label'
import { TextInput } from '@/components/atoms/TextInput'

type Props = {
  label: string
  value: string
  onChange: (v: string) => void
}

export const LabeledTextInput: React.VFC<Props> = ({ label, value, onChange }) => (
  <>
    <Label>{label}</Label>
    <TextInput value={value} onChange={onChange} />
  </>
)
