import { Button as App } from '@/components/atoms/Button'

export default {
  title: 'atoms/Button'
}

export const Button = (): JSX.Element => <App onClick={() => console.info('clicked')}>ボタン</App>
