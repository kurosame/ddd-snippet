import { RecoilRoot } from 'recoil'

import type { addDecorator } from '@storybook/react'

import { EmployeePage as App } from '@/components/pages/Employee'

export default {
  title: 'pages',
  decorators: [fn => <RecoilRoot>{fn()}</RecoilRoot>] as Parameters<typeof addDecorator>[0][]
}

export const EmployeePage = (): JSX.Element => <App />
