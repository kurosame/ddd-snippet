import { createContext } from 'react'
import { useSWRConfig } from 'swr'

import type { ActionConfigure } from '@/application/action'
import { ApiEmployeeRepository } from '@/infrastructure/api/ApiEmployeeRepository'

export const ActionContext = createContext<ActionConfigure | null>(null)

export const useActionContext = () => {
  const { cache, mutate } = useSWRConfig()

  return {
    employeeRepository: new ApiEmployeeRepository(cache, mutate)
  }
}
