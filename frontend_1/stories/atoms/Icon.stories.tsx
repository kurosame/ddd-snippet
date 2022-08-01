import { Icon as App } from '@/components/atoms/Icon'

export default {
  title: 'atoms/Icon'
}

export const Icon = (): JSX.Element => <App name="sync" onClick={() => console.info('clicked')} />
