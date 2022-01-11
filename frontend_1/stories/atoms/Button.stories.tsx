import React from 'react'
import App from '@/components/atoms/Button'

export default {
  title: 'atoms'
}

export const Button = (): JSX.Element => <App onClick={() => console.info('clicked')}>ボタン</App>
