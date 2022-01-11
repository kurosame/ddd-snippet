import React from 'react'

type Props = {
  children: React.ReactNode
}

const Label: React.VFC<Props> = ({ children }) => <span>{children}</span>

export default Label
