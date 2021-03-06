jest.mock('uuid', () => ({ v4: () => 'uuid' }))

global.beforeEach(() => {
  global.fetch = jest.fn(() => new Promise(resolve => resolve({ ok: true, json: () => undefined })))
})

global.afterEach(() => jest.clearAllMocks().resetAllMocks().restoreAllMocks())
