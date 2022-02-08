import { css, keyframes } from '@emotion/react'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const loading = css`
  height: 32px;
  width: 32px;
  border: 4px lightgray solid;
  border-top: 4px steelblue solid;
  border-radius: 50%;
  margin: 10px auto;
  animation: ${rotate} 1s linear infinite;
`

export const Loading: React.VFC = () => <div css={loading} />
