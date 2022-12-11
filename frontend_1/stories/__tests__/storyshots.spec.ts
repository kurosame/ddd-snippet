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
  test: async ({
    story,
    context,
    done
  }: {
    // TODO: Official `story`,`context` is `any`, so I define it myself
    story: { render: string }
    context: { fileName?: string; kind: unknown }
    done?: () => void
  }) => {
    const { result } = renderHook(() => useSWRConfig())
    act(() => {
      result.current.cache.set('/api/employee', [{ employee_id: 'A000', employee_name: 'テストA太郎' }])
    }).catch(e => {
      throw e
    })

    let renderer
    act(() => {
      renderer = create(React.createElement(story.render))
    }).catch(e => {
      throw e
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
