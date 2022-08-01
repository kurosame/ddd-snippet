import { createElement } from 'react'
import { FaSyncAlt } from 'react-icons/fa'

const icons = {
  sync: FaSyncAlt
}

type Props = {
  name: keyof typeof icons
  onClick?: (() => void) | undefined
}

const getIcon = ({ name, onClick }: Props) => createElement(icons[name], { onClick })

export const Icon: React.FC<Props> = ({ name, onClick }) => getIcon({ name, onClick })
