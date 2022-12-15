/**
 * @jest-environment jsdom
 */
import { renderHook } from '@testing-library/react'

import { useActionContext } from '@/components/hooks/di'

describe('useActionContext', () => {
  test('', () => {
    renderHook(useActionContext)
  })
})
