import { createContext } from 'react'
import { useSWRConfig } from 'swr'

type ContextType = {
  cache: unknown
  mutate: unknown
}

const defaultValue: ContextType = {
  cache: undefined,
  mutate: undefined
}

export const SWRContext = createContext<ContextType>(defaultValue)

export const useSetupSWR = () => {
  const { cache, mutate } = useSWRConfig()

  return { cache, mutate }
}
