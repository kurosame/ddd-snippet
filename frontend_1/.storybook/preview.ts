import { worker } from '../src/__mocks__/browser'

if (process.env.NODE_ENV !== 'test') {
  worker().start()
}
