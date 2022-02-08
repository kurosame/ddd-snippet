import { css } from '@emotion/react'

type Props = {
  onClick: () => void
  children: React.ReactNode
}

const button = css`
  font-weight: bold;
  color: deepskyblue;
  background: whitesmoke;
  border-color: deepskyblue;
  border-radius: 5px;
  padding: 2px 4px;
  transition: 0.5s;
  &:hover {
    color: white;
    background: deepskyblue;
  }
`

export const Button: React.VFC<Props> = ({ onClick, children }) => (
  <button type="button" css={button} onClick={() => onClick()}>
    {children}
  </button>
)
