/**
 * @jest-environment jsdom
 */
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
    story: { render: () => unknown }
    context: { fileName?: string; kind: unknown }
    done?: () => void
  }) => {
    const { result } = renderHook(useSWRConfig)
    await act(() => {
      result.current.cache.set('/api/employee', [{ employee_id: 'A000', employee_name: 'テストA太郎' }])
    })

    let renderer
    await act(() => {
      renderer = renderHook(story.render)
    })

    const snapshotFileName = converter.getSnapshotFileName(context)
    expect(renderer).toMatchSpecificSnapshot(snapshotFileName)

    if (done) done()
  }
})
