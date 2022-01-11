import React from 'react'

type Props = {
  onClick: () => void
  children: React.ReactNode
}

const Button: React.VFC<Props> = ({ onClick, children }) => (
  <button type="button" onClick={() => onClick()}>
    {children}
  </button>
)

export default Button
