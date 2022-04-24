import { RecoilRoot } from 'recoil'

import type { addDecorator } from '@storybook/react'

import { Employee as App } from '@/components/organisms/Employee'

export default {
  title: 'organisms',
  decorators: [fn => <RecoilRoot>{fn()}</RecoilRoot>] as Parameters<typeof addDecorator>[0][]
}

export const Employee = (): JSX.Element => <App />
