import React from 'react'

type Props = {
  children: React.ReactNode
}

export const Label: React.VFC<Props> = ({ children }) => <span>{children}</span>
