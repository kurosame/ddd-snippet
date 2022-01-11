import React from 'react'

type Props = {
  text: string
}

const Label: React.VFC<Props> = ({ text }) => <span>{text}</span>

export default Label
