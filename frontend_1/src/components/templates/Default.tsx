import React from 'react'

type Props = {
  children: React.ReactNode
}

export const DefaultLayout: React.VFC<Props> = ({ children }) => <>{children}</>
