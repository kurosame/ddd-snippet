import type React from 'react'
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
  width: 32px;
  height: 32px;
  margin: 10px auto;
  border: 4px #ddd solid;
  border-top: 4px #2e93e6 solid;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`

export const Loading: React.VFC = () => <div css={loading} />
