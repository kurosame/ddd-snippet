/**
 * @jest-environment jsdom
 */
import React from 'react'
import { create } from 'react-test-renderer'
import { useSWRConfig } from 'swr'

import initStoryshots, { Stories2SnapsConverter } from '@storybook/addon-storyshots'
import { act, renderHook } from '@testing-library/react'

const converter = new Stories2SnapsConverter()

initStoryshots({
  asyncJest: true,
  test: async ({ story, context, done }) => {
    const { result } = renderHook(() => useSWRConfig())
    act(() => {
      result.current.cache.set('/api/employee', [{ employee_id: 'A000', employee_name: 'テストA太郎' }])
    })

    let renderer
    act(() => {
      renderer = create(React.createElement(story.render))
    })

    await act(
      () =>
        new Promise(r => {
          setTimeout(r, 500)
        })
    )

    const snapshotFileName = converter.getSnapshotFileName(context)
    expect(renderer).toMatchSpecificSnapshot(snapshotFileName)

    if (done) done()
  }
})
