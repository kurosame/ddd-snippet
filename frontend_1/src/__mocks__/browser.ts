import { setupWorker } from 'msw'

import { employee } from '@/__mocks__/employee'

export const worker = () => setupWorker(...employee)
