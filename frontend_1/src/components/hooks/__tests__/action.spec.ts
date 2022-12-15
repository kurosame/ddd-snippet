/**
 * @jest-environment jsdom
 */
import React from 'react'

import { renderHook } from '@testing-library/react'

import { useAction } from '@/components/hooks/action'

describe('useAction', () => {
  test('return is fn', () => {
    const spyUseContext = jest.spyOn(React, 'useContext').mockImplementation(() => 'dummy')

    const r = renderHook(() => useAction(() => () => 'test')).result

    expect(spyUseContext).toBeCalled()
    expect(r.current()).toBe('test')
  })

  test('throw error when actionContext is null', () => {
    const spyUseContext = jest.spyOn(React, 'useContext').mockImplementation(() => null)

    expect(() => useAction(() => () => 'test')).toThrowError(new Error('actionContext is not initialized'))
    expect(spyUseContext).toBeCalled()
  })
})
