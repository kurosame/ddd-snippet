import { useContext, useMemo } from 'react'

import type { ActionConfigure } from '@/application/action'
import { ActionContext } from '@/components/hooks/di'

export const useAction = <T extends unknown[], U>(
  action: (ac: { actionContext: ActionConfigure }) => (...args: T) => U
) => {
  const actionContext = useContext(ActionContext)
  if (actionContext === null) {
    throw new Error('actionContext is not initialized')
  }
  const fn = useMemo(() => action({ actionContext }), [action, actionContext])

  return fn
}
