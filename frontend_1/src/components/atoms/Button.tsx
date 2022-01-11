import React from 'react'

type Props = {
  name: string
}

const Button: React.VFC<Props> = ({ name }) => <button type="button">{name}</button>

export default Button
