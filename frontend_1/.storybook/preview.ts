import { addDecorator } from '@storybook/react'
import { withPerformance } from 'storybook-addon-performance'
import { worker } from '../src/__mocks__/browser'

if (process.env.NODE_ENV !== 'test') {
  addDecorator(withPerformance)
  worker().start()
}
